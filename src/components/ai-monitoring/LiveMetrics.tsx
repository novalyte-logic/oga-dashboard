'use client';

import { useEffect, useState } from 'react';

interface Metric {
  label: string;
  unit: string;
  tone: 'teal' | 'amber' | 'crimson';
  value: number;
}

const baseMetrics: Metric[] = [
  { label: "Symptom Classifier Rate", unit: "ops/s", tone: "teal", value: 14200 },
  { label: "Hormone Risk Reasoning", unit: "ms", tone: "amber", value: 208 },
  { label: "Match Confidence Median", unit: "%", tone: "teal", value: 91.2 },
  { label: "Safety Exclusions", unit: "events", tone: "crimson", value: 3 },
  { label: "Fallback Utilization", unit: "%", tone: "amber", value: 12 },
  { label: "Inference Throughput", unit: "M tokens/min", tone: "teal", value: 18.4 },
];

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState(baseMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          const delta =
            metric.unit === 'ops/s'
              ? 700
              : metric.unit === 'ms'
                ? 12
                : metric.unit.includes('%')
                  ? 2.5
                  : metric.unit === 'events'
                    ? 1
                    : 0.9;
          const variance =
            Math.random() * delta - delta / 2;
          const nextValue = Math.max(0, metric.value + variance);
          const precision = metric.unit.includes('tokens') || metric.unit.includes('%') ? 1 : 0;
          return { ...metric, value: parseFloat(nextValue.toFixed(precision)) };
        })
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white/80"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{metric.label}</p>
          <p className={`text-2xl ${metric.tone === 'teal' ? 'text-teal' : metric.tone === 'amber' ? 'text-amber' : 'text-crimson'}`}>
            {metric.value} <span className="text-sm text-white/50">{metric.unit}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default LiveMetrics;
