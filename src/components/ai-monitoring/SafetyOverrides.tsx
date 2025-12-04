'use client';

import { useEffect, useState } from 'react';

interface OverrideEvent {
  id: string;
  gate: string;
  detail: string;
  severity: 'amber' | 'crimson';
}

const seeds: OverrideEvent[] = [
  { id: '1', gate: 'Hormone Gate SG-4B', detail: 'Manual override // testosterone dose conflict', severity: 'crimson' },
  { id: '2', gate: 'Provider Escalation', detail: 'Rerouted to endocrine surgeon for high PSA', severity: 'amber' },
  { id: '3', gate: 'Abuse Sentinel', detail: 'Locked inference throttle @65% after anomaly', severity: 'crimson' },
];

const SafetyOverrides = () => {
  const [events, setEvents] = useState(seeds);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents((prev) => [...prev.slice(-5), newEvent()]);
    }, 6400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 font-mono text-xs text-white/80">
      {events.map((event) => (
        <div
          key={event.id}
          className="border border-white/10 bg-black/40 px-3 py-3"
        >
          <div className="flex items-center justify-between text-[11px]">
            <span>{event.gate}</span>
            <span className={event.severity === 'crimson' ? 'text-crimson' : 'text-amber'}>
              {event.severity === 'crimson' ? 'CRITICAL' : 'WARNING'}
            </span>
          </div>
          <p className="mt-2 text-white">{event.detail}</p>
        </div>
      ))}
    </div>
  );
};

const newEvent = (): OverrideEvent => {
  const templates = [
    { gate: 'Hormone Fail-safe 9F', detail: 'Biohazard exclusion tripped on hormone vial batch', severity: 'crimson' as const },
    { gate: 'Vendor Command', detail: 'Paused vendor payout to cold-chain provider', severity: 'amber' as const },
    { gate: 'AI Throttle', detail: 'Inference rate limited after tamper alert', severity: 'crimson' as const },
  ];
  const template = templates[Math.floor(Math.random() * templates.length)];
  return {
    id: crypto.randomUUID(),
    ...template,
  };
};

export default SafetyOverrides;
