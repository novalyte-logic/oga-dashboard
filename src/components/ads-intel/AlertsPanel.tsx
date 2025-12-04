'use client';

import { useEffect, useState } from 'react';

interface Alert {
  title: string;
  detail: string;
  severity: 'amber' | 'crimson';
  risk: number;
}

const seeds: Alert[] = [
  { title: 'Spend Spike // TikTok', detail: '+38% vs baseline last 30m', severity: 'amber', risk: 62 },
  { title: 'CPA Surge // Meta Feed', detail: '+14% vs target', severity: 'crimson', risk: 81 },
  { title: 'Pixel Drop // Google', detail: '4% of conversions missing', severity: 'crimson', risk: 75 },
];

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState(seeds);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) => {
        const next = [...prev];
        next[Math.floor(Math.random() * next.length)] = {
          title: 'CTR Collapse // TikTok Cold',
          detail: '-3.1pp vs 1h',
          severity: 'amber',
          risk: 58,
        };
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div key={alert.title} className="border border-white/10 bg-black/40 px-3 py-3 font-mono text-xs text-white/80">
          <div className="flex items-center justify-between">
            <span className={alert.severity === 'crimson' ? 'text-crimson' : 'text-amber'}>
              {alert.severity === 'crimson' ? 'CRITICAL' : 'WARNING'}
            </span>
            <span>Risk {alert.risk}%</span>
          </div>
          <p className="text-white">{alert.title}</p>
          <p>{alert.detail}</p>
          <div className="text-[10px] text-white/50">Action Required: route to Superadmin controls.</div>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;
