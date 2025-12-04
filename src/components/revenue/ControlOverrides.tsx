'use client';

import { useState } from 'react';

const ControlOverrides = () => {
  const [form, setForm] = useState({
    control: '',
    reason: '',
    role: '',
    notes: '',
  });

  const controls = [
    'Commission Adjustment',
    'Vendor Payout Throttle',
    'Clinic Revenue Cap',
    'Emergency Revenue Freeze',
  ];

  const roles = ['Chief Financial Officer', 'Revenue Ops Commander', 'Compliance Director'];

  return (
    <form className="space-y-4 text-sm text-white/80">
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-white/40">Control Channel</label>
        <select
          value={form.control}
          onChange={(e) => setForm({ ...form, control: e.target.value })}
          className="mt-1 w-full border border-white/15 bg-black/40 p-3 font-mono text-white"
        >
          <option value="">SELECT CONTROL</option>
          {controls.map((control) => (
            <option key={control} value={control}>
              {control}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-white/40">Reason Code</label>
          <input
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            className="mt-1 w-full border border-white/15 bg-black/40 p-3 font-mono text-white"
            placeholder="e.g., RISK-DELTA-904"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-white/40">Role Validation</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="mt-1 w-full border border-white/15 bg-black/40 p-3 font-mono text-white"
          >
            <option value="">SELECT ROLE</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-white/40">Immutable Audit Log</label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="mt-1 min-h-[120px] w-full border border-white/15 bg-black/40 p-3 font-mono text-white"
          placeholder="Detail forensic rationale, scope, and expected blast radius..."
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="border border-white/30 bg-black/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.3em] text-white"
        >
          Prime Override
        </button>
        <button
          type="button"
          className="border border-crimson/60 bg-crimson/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.3em] text-crimson"
        >
          Deploy Freeze
        </button>
      </div>
    </form>
  );
};

export default ControlOverrides;
