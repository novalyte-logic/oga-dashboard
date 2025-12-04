'use client';

import { useEffect, useMemo, useState } from 'react';

interface Metric {
  id: string;
  label: string;
  unit?: string;
  value: number;
  deltas: {
    '1h': number;
    '24h': number;
    '7d': number;
  };
  sparkline: number[];
}

const BASE_METRICS: Metric[] = [
  { id: 'impressions', label: 'Total Impressions', value: 22_480_000, deltas: { '1h': 2.1, '24h': 5.6, '7d': 12.3 }, sparkline: [18, 19, 20, 23, 22, 24, 25] },
  { id: 'clicks', label: 'Total Clicks', value: 1_742_000, deltas: { '1h': 1.4, '24h': 4.3, '7d': 9.1 }, sparkline: [8, 8.5, 9.2, 9.5, 9.1, 9.7, 10.2] },
  { id: 'ctr', label: 'CTR %', value: 7.8, unit: '%', deltas: { '1h': 0.3, '24h': 0.5, '7d': -0.2 }, sparkline: [7.2, 7.3, 7.6, 7.8, 7.9, 8, 7.8] },
  { id: 'cpc', label: 'CPC', value: 2.43, unit: '$', deltas: { '1h': -0.4, '24h': -1.2, '7d': -3.9 }, sparkline: [2.9, 2.8, 2.7, 2.6, 2.55, 2.5, 2.43] },
  { id: 'cpa', label: 'CPA', value: 118, unit: '$', deltas: { '1h': 0.9, '24h': -0.6, '7d': -3.2 }, sparkline: [123, 121, 119, 120, 117, 118, 118] },
  { id: 'roas', label: 'ROAS', value: 5.4, unit: 'x', deltas: { '1h': 0.2, '24h': 0.4, '7d': 0.7 }, sparkline: [4.7, 4.9, 5.1, 5.2, 5.3, 5.4, 5.4] },
  { id: 'spend', label: 'Total Spend (Today)', value: 3_420_000, unit: '$', deltas: { '1h': 1.1, '24h': 3.8, '7d': 7.5 }, sparkline: [2.4, 2.6, 2.8, 3, 3.1, 3.3, 3.42] },
  { id: 'revenue', label: 'Revenue Attributed', value: 18_560_000, unit: '$', deltas: { '1h': 1.6, '24h': 4.8, '7d': 10.2 }, sparkline: [14, 14.5, 15, 16, 17, 18, 18.5] },
  { id: 'profit', label: 'Net Profit from Ads', value: 15_140_000, unit: '$', deltas: { '1h': 1.2, '24h': 4.5, '7d': 11.6 }, sparkline: [12, 12.3, 12.8, 13.6, 14.1, 14.9, 15.1] },
];

const GlobalAdsMetrics = () => {
  const [metrics, setMetrics] = useState(BASE_METRICS);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          const jitter = metric.id === 'ctr' ? (Math.random() - 0.5) * 0.2 : metric.id === 'roas' ? (Math.random() - 0.5) * 0.1 : (Math.random() - 0.5) * metric.value * 0.02;
          const newValue = Math.max(0, metric.value + jitter);
          const nextSpark = [...metric.sparkline.slice(1), newValue / (metric.unit === '%' || metric.unit === 'x' ? 1 : 1_000_000)];
          return {
            ...metric,
            value: newValue,
            sparkline: nextSpark,
          };
        })
      );
      setLastUpdated(new Date());
    }, 35000);
    return () => clearInterval(interval);
  }, []);

  const timestamp = useMemo(() => lastUpdated.toLocaleTimeString(), [lastUpdated]);

  return (
    <div className="space-y-2">
      <div className="text-xs font-mono text-white/50">Auto-refresh ~35s // Last sync {timestamp}</div>
      <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.id} className="border border-white/10 bg-black/40 p-4">
            <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-white/40">
              <span>{metric.label}</span>
              <span>{metric.unit ? metric.unit : ''}</span>
            </div>
            <div className="mt-1 flex items-baseline gap-3">
              <p className="font-mono text-2xl text-white">
                {metric.unit === '$'
                  ? `$${metric.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
                  : metric.unit === '%'
                    ? `${metric.value.toFixed(2)}%`
                    : metric.unit === 'x'
                      ? `${metric.value.toFixed(2)}x`
                      : metric.value.toLocaleString()}
              </p>
              <span className={`font-mono text-sm ${metric.deltas['1h'] >= 0 ? 'text-teal' : 'text-crimson'}`}>
                {metric.deltas['1h'] >= 0 ? '▲' : '▼'} {Math.abs(metric.deltas['1h']).toFixed(1)}%
              </span>
            </div>
            <div className="mt-2 flex justify-between font-mono text-[11px] text-white/50">
              <div>
                <span className={metric.deltas['24h'] >= 0 ? 'text-teal' : 'text-crimson'}>{metric.deltas['24h'] >= 0 ? '+' : '-'}{Math.abs(metric.deltas['24h']).toFixed(1)}%</span> /24h
              </div>
              <div>
                <span className={metric.deltas['7d'] >= 0 ? 'text-teal' : 'text-crimson'}>{metric.deltas['7d'] >= 0 ? '+' : '-'}{Math.abs(metric.deltas['7d']).toFixed(1)}%</span> /7d
              </div>
            </div>
            <Sparkline data={metric.sparkline} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Sparkline = ({ data }: { data: number[] }) => {
  const width = 120;
  const height = 32;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} className="mt-2">
      <polyline fill="none" stroke="rgba(0,240,181,0.7)" strokeWidth="2" points={points} />
    </svg>
  );
};

export default GlobalAdsMetrics;
