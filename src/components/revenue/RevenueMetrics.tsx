'use client';

import { useEffect, useState } from 'react';

interface Metric {
  label: string;
  value: number;
  format: 'currency' | 'percent' | 'number';
  suffix?: string;
  tone: 'teal' | 'amber' | 'crimson';
}

const baseMetrics: Metric[] = [
  { label: 'Total Revenue (real-time)', value: 212_400_000, format: 'currency', tone: 'teal' },
  { label: 'Clinics Revenue', value: 96_200_000, format: 'currency', tone: 'teal' },
  { label: 'Marketplace Revenue', value: 74_500_000, format: 'currency', tone: 'teal' },
  { label: 'Vendor Revenue', value: 41_700_000, format: 'currency', tone: 'teal' },
  { label: 'Patient LTV', value: 19_800, format: 'currency', tone: 'amber' },
  { label: 'CAC / Break-even', value: 610, format: 'currency', tone: 'amber' },
];

const formatter = (metric: Metric) => {
  if (metric.format === 'currency') {
    return `$${(metric.value / 1_000_000 >= 1 ? metric.value / 1_000_000 : metric.value).toLocaleString(undefined, {
      minimumFractionDigits: metric.value >= 1_000_000 ? 1 : 0,
      maximumFractionDigits: metric.value >= 1_000_000 ? 1 : 0,
    })}${metric.value >= 1_000_000 ? 'M' : ''}`;
  }
  if (metric.format === 'percent') {
    return `${metric.value.toFixed(1)}${metric.suffix ?? ''}`;
  }
  return `${metric.value.toLocaleString()}${metric.suffix ?? ''}`;
};

const RevenueMetrics = () => {
  const [metrics, setMetrics] = useState(baseMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          const variance =
            metric.format === 'currency'
              ? metric.value * 0.0025 * (Math.random() - 0.5)
              : (Math.random() - 0.5) * 1.5;
          return { ...metric, value: Math.max(0, metric.value + variance) };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="border border-white/10 bg-black/40 p-4 font-mono text-sm">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{metric.label}</p>
          <p
            className={`text-2xl ${
              metric.tone === 'teal' ? 'text-teal' : metric.tone === 'amber' ? 'text-amber' : 'text-crimson'
            }`}
          >
            {formatter(metric)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RevenueMetrics;
