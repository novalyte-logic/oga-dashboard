'use client';

import { useState } from 'react';

const controlSwitches = [
  { label: 'Global Kill Switch', key: 'global' },
  { label: 'Google Ads Kill Switch', key: 'google' },
  { label: 'TikTok Ads Kill Switch', key: 'tiktok' },
  { label: 'Meta Ads Kill Switch', key: 'meta' },
];

const controlButtons = [
  'Daily Budget Override',
  'Emergency Spend Cap',
  'Campaign Enable/Disable',
  'Creative Enable/Disable',
  'Auto-scaling Toggle',
];

const AdsSuperadminControls = () => {
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    global: false,
    google: false,
    tiktok: false,
    meta: false,
  });
  const [auditLog, setAuditLog] = useState<
    { action: string; timestamp: string; signature: string }[]
  >([]);

  const runAction = (action: string) => {
    const timestamp = new Date().toISOString();
    const signature = crypto.randomUUID().replace(/-/g, '').slice(0, 12).toUpperCase();
    setAuditLog((prev) => [{ action, timestamp, signature }, ...prev]);
  };

  const toggleSwitch = (key: string) => {
    setSwitches((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      runAction(`${key.toUpperCase()} ${next[key] ? 'PAUSED' : 'RESUMED'}`);
      return next;
    });
  };

  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="grid gap-3 md:grid-cols-2">
        {controlSwitches.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => toggleSwitch(item.key)}
            className={`border border-white/10 px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.3em] ${
              switches[item.key] ? 'bg-crimson/20 text-crimson' : 'bg-black/40 text-white'
            }`}
          >
            {item.label} — {switches[item.key] ? 'ACTIVE' : 'STANDBY'}
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {controlButtons.map((btn) => (
          <button
            key={btn}
            type="button"
            onClick={() => runAction(btn)}
            className="border border-white/10 bg-black/40 px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10"
          >
            {btn}
          </button>
        ))}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Immutable Audit Entries</p>
        <div className="mt-2 max-h-48 overflow-y-auto border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-white/70">
          {auditLog.length === 0 && <p>No overrides issued.</p>}
          {auditLog.map((entry) => (
            <div key={entry.signature} className="border-b border-white/10 py-2 last:border-b-0">
              <p>{entry.timestamp}</p>
              <p>{entry.action}</p>
              <p className="text-teal">SHA {entry.signature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsSuperadminControls;
