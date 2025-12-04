'use client';

import { useEffect, useState } from 'react';

interface LeakFlag {
  type: 'clinic' | 'vendor' | 'zone' | 'category';
  label: string;
  impact: string;
  severity: 'amber' | 'crimson';
}

const seeds: LeakFlag[] = [
  { type: 'clinic', label: 'CLINIC-07A // Houston', impact: '-22% conversion', severity: 'crimson' },
  { type: 'zone', label: 'APAC Corridor / Tier 2', impact: 'Demand > Fulfillment by 33%', severity: 'amber' },
  { type: 'vendor', label: 'MediSupply Grid Q4', impact: '3.1 day lag on sterile kits', severity: 'amber' },
  { type: 'category', label: 'Cardio Robotics', impact: 'Pricing inefficiency 12%', severity: 'crimson' },
];

const LeakDetection = () => {
  const [flags, setFlags] = useState(seeds);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlags((prev) => {
        const next = [...prev];
        next[Math.floor(Math.random() * next.length)] = randomFlag();
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 font-mono text-xs text-white/80">
      {flags.map((flag) => (
        <div key={`${flag.label}-${flag.impact}`} className="border border-white/10 bg-black/40 px-3 py-3">
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-[0.3em] text-white/40">{flag.type}</span>
            <span className={flag.severity === 'crimson' ? 'text-crimson' : 'text-amber'}>
              {flag.severity === 'crimson' ? 'CRITICAL' : 'WARNING'}
            </span>
          </div>
          <p className="mt-2 text-white">{flag.label}</p>
          <p className="text-[11px] text-white/60">{flag.impact}</p>
        </div>
      ))}
    </div>
  );
};

const randomFlag = (): LeakFlag => {
  const templates: LeakFlag[] = [
    { type: 'clinic', label: 'CLINIC-11B // Berlin', impact: '-14% fulfillment speed', severity: 'amber' },
    { type: 'zone', label: 'LATAM / Tier 1', impact: 'Pricing erosion 9%', severity: 'amber' },
    { type: 'vendor', label: 'BioEdge Instruments', impact: 'Delivery bottleneck - 4 days', severity: 'crimson' },
    { type: 'category', label: 'Oncology Marketplace', impact: 'Low conversion 18%', severity: 'crimson' },
  ];
  return templates[Math.floor(Math.random() * templates.length)];
};

export default LeakDetection;
