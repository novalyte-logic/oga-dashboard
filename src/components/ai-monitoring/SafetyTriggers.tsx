'use client';

import { useEffect, useState } from 'react';

interface Trigger {
  id: string;
  rule: string;
  detail: string;
  severity: 'amber' | 'crimson';
}

const base: Trigger[] = [
  { id: crypto.randomUUID(), rule: 'Hormone Override SG-12', detail: 'PSA delta > threshold, forced provider veto', severity: 'crimson' },
  { id: crypto.randomUUID(), rule: 'Abuse Sentinel Gate', detail: 'Detected patterned duplicate intake, sandboxed session', severity: 'amber' },
];

const SafetyTriggers = () => {
  const [triggers, setTriggers] = useState(base);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggers((prev) => {
        const next = [...prev.slice(-3), randomTrigger()];
        return next;
      });
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 font-mono text-xs text-white/80">
      {triggers.map((trigger) => (
        <div key={trigger.id} className="border border-white/10 bg-black/40 px-3 py-3">
          <div className="flex items-center justify-between">
            <span>{trigger.rule}</span>
            <span className={trigger.severity === 'crimson' ? 'text-crimson' : 'text-amber'}>
              {trigger.severity === 'crimson' ? 'CRITICAL' : 'WARNING'}
            </span>
          </div>
          <p className="mt-1 text-white">{trigger.detail}</p>
        </div>
      ))}
    </div>
  );
};

const randomTrigger = (): Trigger => {
  const templates: Trigger[] = [
    { id: crypto.randomUUID(), rule: 'Symptom Classifier Gate', detail: 'Safety exclusion: chest-pain token + high BP', severity: 'crimson' },
    { id: crypto.randomUUID(), rule: 'Provider Sanity Check', detail: 'Clinic flagged for low tele-triage readiness', severity: 'amber' },
    { id: crypto.randomUUID(), rule: 'Hormone Cap Fail-safe', detail: 'Override triggered: testosterone dose block', severity: 'crimson' },
  ];
  return templates[Math.floor(Math.random() * templates.length)];
};

export default SafetyTriggers;
