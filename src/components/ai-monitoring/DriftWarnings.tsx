'use client';

import { useEffect, useState } from 'react';

interface DriftAlert {
  id: string;
  signal: string;
  delta: number;
  status: 'stable' | 'watch';
}

const baseAlerts: DriftAlert[] = [
  { id: crypto.randomUUID(), signal: 'Symptom embedding Δ', delta: 0.024, status: 'watch' },
  { id: crypto.randomUUID(), signal: 'Vendor demand vector', delta: 0.011, status: 'stable' },
];

const DriftWarnings = () => {
  const [alerts, setAlerts] = useState(baseAlerts);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) =>
        prev.map((alert) => {
          const jitter = (Math.random() - 0.5) * 0.01;
          return { ...alert, delta: Math.max(0, alert.delta + jitter) };
        })
      );
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div key={alert.id} className="border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-white/80">
          <div className="flex items-center justify-between">
            <span>{alert.signal}</span>
            <span className={alert.status === 'watch' ? 'text-amber' : 'text-teal'}>
              Δ {alert.delta.toFixed(3)}
            </span>
          </div>
          <p className="text-[11px] text-white/50">
            Status: {alert.status === 'watch' ? 'Observe & recalibrate ready' : 'Stable'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DriftWarnings;
