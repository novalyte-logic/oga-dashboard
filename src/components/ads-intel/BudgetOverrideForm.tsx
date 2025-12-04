'use client';

import { useState } from 'react';

interface Entry {
  action: string;
  platform: string;
  oldValue: string;
  newValue: string;
  reason: string;
  timestamp: string;
}

const BudgetOverrideForm = () => {
  const [platform, setPlatform] = useState('Global');
  const [action, setAction] = useState('Manual override');
  const [oldValue, setOldValue] = useState('$500k');
  const [newValue, setNewValue] = useState('$550k');
  const [reason, setReason] = useState('ROAS 6.2x, allow micro ramp');
  const [entries, setEntries] = useState<Entry[]>([]);

  const submit = () => {
    const timestamp = new Date().toISOString();
    setEntries((prev) => [
      { action, platform, oldValue, newValue, reason, timestamp },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-3 font-mono text-xs text-white/80">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1">
          <span>Platform</span>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full border border-white/15 bg-black/40 p-2 text-white">
            <option>Global</option>
            <option>Google</option>
            <option>TikTok</option>
            <option>Meta</option>
          </select>
        </label>
        <label className="space-y-1">
          <span>Action</span>
          <select value={action} onChange={(e) => setAction(e.target.value)} className="w-full border border-white/15 bg-black/40 p-2 text-white">
            <option>Manual override</option>
            <option>Hard lock</option>
            <option>Auto-scaling OFF</option>
            <option>Platform kill</option>
          </select>
        </label>
        <label className="space-y-1">
          <span>Old value</span>
          <input value={oldValue} onChange={(e) => setOldValue(e.target.value)} className="w-full border border-white/15 bg-black/40 p-2 text-white" />
        </label>
        <label className="space-y-1">
          <span>New value</span>
          <input value={newValue} onChange={(e) => setNewValue(e.target.value)} className="w-full border border-white/15 bg-black/40 p-2 text-white" />
        </label>
      </div>
      <label className="space-y-1 block">
        <span>Reason code</span>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} className="w-full border border-white/15 bg-black/40 p-2 text-white" />
      </label>
      <button type="button" onClick={submit} className="border border-white/10 bg-black/40 px-4 py-2 text-white">
        Log Override
      </button>
      <div className="max-h-48 overflow-y-auto border border-white/10 bg-black/40 px-3 py-2">
        {entries.length === 0 && <p>No overrides logged.</p>}
        {entries.map((entry) => (
          <div key={entry.timestamp} className="border-b border-white/10 py-2 last:border-b-0">
            <p>{entry.timestamp}</p>
            <p>{entry.platform} · {entry.action}</p>
            <p>Old: {entry.oldValue} → New: {entry.newValue}</p>
            <p>Reason: {entry.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetOverrideForm;
