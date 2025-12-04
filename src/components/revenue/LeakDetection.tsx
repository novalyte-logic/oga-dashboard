'use client';

import { useEffect, useState } from 'react';

interface LeakFlag {
  type: 'clinic' | 'vendor' | 'zone' | 'category';
  label: string;
  impact: string;
  severity: 'amber' | 'crimson';
  severityIndex: number;
  fix: string;
}

const seeds: LeakFlag[] = [
  { type: 'clinic', label: 'CLINIC-07A // Houston', impact: '-22% conversion', severity: 'crimson', severityIndex: 87, fix: 'Inject tele-triage squad + audit intake script' },
  { type: 'zone', label: 'APAC Corridor / Tier 2', impact: 'Demand > Fulfillment by 33%', severity: 'amber', severityIndex: 62, fix: 'Re-route vendor lockers / price surge' },
  { type: 'vendor', label: 'MediSupply Grid Q4', impact: '3.1 day lag on hormone kits', severity: 'amber', severityIndex: 59, fix: 'Throttle payouts + expedite cold chain' },
  { type: 'category', label: 'Cardio Robotics', impact: 'Pricing inefficiency 12%', severity: 'crimson', severityIndex: 78, fix: 'Reprice bundles + enforce margin floor' },
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
    <div className="space-y-3 text-sm text-white/80">
      {flags.map((flag) => (
        <div key={`${flag.label}-${flag.impact}`} className="border border-white/10 bg-black/40 px-3 py-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="uppercase tracking-[0.3em] text-white/40">{flag.type}</span>
            <span className={flag.severity === 'crimson' ? 'text-crimson' : 'text-amber'}>
              {flag.severity === 'crimson' ? 'CRITICAL' : 'WARNING'}
            </span>
          </div>
          <p className="mt-2 font-mono text-xs text-white/60">{flag.label}</p>
          <p>{flag.impact}</p>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-white/50">
              <span>Severity Index</span>
              <span>{flag.severityIndex}%</span>
            </div>
            <div className="h-1 bg-white/10">
              <div
                className={`h-full ${flag.severity === 'crimson' ? 'bg-crimson' : 'bg-amber'}`}
                style={{ width: `${flag.severityIndex}%` }}
              />
            </div>
          </div>
          <div className="mt-2 border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs text-white/70">
            Fix this: {flag.fix}
          </div>
        </div>
      ))}
    </div>
  );
};

const randomFlag = (): LeakFlag => {
  const templates: LeakFlag[] = [
    { type: 'clinic', label: 'CLINIC-11B // Berlin', impact: '-14% fulfillment speed', severity: 'amber', severityIndex: 55, fix: 'Deploy rapid-response ops cell' },
    { type: 'zone', label: 'LATAM / Tier 1', impact: 'Pricing erosion 9%', severity: 'amber', severityIndex: 61, fix: 'Reprice bundles + targeted ads' },
    { type: 'vendor', label: 'BioEdge Instruments', impact: 'Delivery bottleneck - 4 days', severity: 'crimson', severityIndex: 84, fix: 'Suspend payouts + reroute to backup vendor' },
    { type: 'category', label: 'Peptide Marketplace', impact: 'Low conversion 18%', severity: 'crimson', severityIndex: 73, fix: 'Revise margin floor + highlight top clinics' },
  ];
  return templates[Math.floor(Math.random() * templates.length)];
};

export default LeakDetection;
