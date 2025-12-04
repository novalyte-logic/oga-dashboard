'use client';

import { useState } from 'react';

const modes = [
  { key: 'observe', label: 'OBSERVE', description: 'No automation, telemetry only.', color: 'text-white/60' },
  { key: 'assist', label: 'ASSIST', description: 'AI recommends, Superadmin approves.', color: 'text-amber' },
  { key: 'copilot', label: 'CO-PILOT', description: 'AI executes with guardrails.', color: 'text-teal' },
  { key: 'autopilot', label: 'FULL AUTOPILOT', description: 'AI deploys capital autonomously.', color: 'text-crimson' },
] as const;

const AutopilotModes = () => {
  const [active, setActive] = useState<typeof modes[number]['key']>('assist');

  return (
    <div className="space-y-3">
      <div className="grid gap-3 lg:grid-cols-4 font-mono text-xs text-white/80">
        {modes.map((mode) => (
          <button
            key={mode.key}
            type="button"
            onClick={() => setActive(mode.key)}
            className={`border border-white/10 px-4 py-3 text-left uppercase tracking-[0.3em] ${
              mode.key === active ? 'bg-teal/20 text-teal' : 'bg-black/40 text-white'
            }`}
          >
            {mode.label}
            <p className="mt-1 text-[10px] normal-case tracking-normal text-white/60">{mode.description}</p>
          </button>
        ))}
      </div>
      <p className="font-mono text-xs text-white/60">
        Active mode: <span className="text-teal">{modes.find((m) => m.key === active)?.label}</span>
      </p>
    </div>
  );
};

export default AutopilotModes;
