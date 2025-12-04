'use client';

import { useState } from 'react';

const actions = [
  { label: 'Clear AI caches', code: 'CTRL-CACHE-01' },
  { label: 'Restart critical modules', code: 'CTRL-RESTART-02' },
  { label: 'Toggle fallback models', code: 'CTRL-FALLBACK-03' },
  { label: 'Trigger recalibration test', code: 'CTRL-CALIB-04' },
  { label: 'Export reasoning summary', code: 'CTRL-EXPORT-05' },
];

const safetySwitches = [
  { label: 'Hormone override lock', key: 'hormone' },
  { label: 'Abuse sentinel kill-switch', key: 'abuse' },
  { label: 'Fallback TRT model', key: 'fallback' },
];

const SuperadminControls = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    hormone: true,
    abuse: true,
    fallback: false,
  });

  return (
    <div className="space-y-3 text-sm text-white/80">
      <p className="font-mono text-xs text-white/50">Superadmin actions are executed instantly. No RBAC checkpoints.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.code}
            type="button"
            onClick={() => setSelected(action.code)}
            className="border border-white/15 bg-black/40 px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.3em] text-white hover:bg-white/5 focus:outline-none"
          >
            <span className="block text-[10px] text-white/40">{action.code}</span>
            <span className="text-sm">{action.label}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {safetySwitches.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setSwitches((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
            className={`border border-white/15 px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] ${
              switches[item.key] ? 'bg-teal/10 text-teal' : 'bg-black/30 text-white/60'
            }`}
          >
            <span className="text-[10px] text-white/40">Safety Switch</span>
            <p>{item.label}</p>
            <span className="text-[10px]">{switches[item.key] ? 'ACTIVE' : 'STANDBY'}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="border border-white/15 bg-black/40 p-3 font-mono text-xs text-white/60">
          Armed action: {selected} — awaiting confirmation ping from infra bus…
        </div>
      )}
    </div>
  );
};

export default SuperadminControls;
