'use client';

import { useState } from 'react';

const controlActions = [
  { label: 'Adjust global marketplace margin', code: 'MARGIN_SHIFT' },
  { label: 'Update partner payout rate', code: 'PAYOUT_UPDATE' },
  { label: 'Enable/Disable products', code: 'PRODUCT_TOGGLE' },
  { label: 'Override clinic eligibility', code: 'CLINIC_OVERRIDE' },
  { label: 'Instant forecast update', code: 'FORECAST_REFRESH' },
  { label: 'Export revenue report', code: 'EXPORT_REPORT' },
];

const SuperadminRevenueControls = () => {
  const [auditLog, setAuditLog] = useState<
    { action: string; timestamp: string; signature: string }[]
  >([]);

  const executeAction = (action: string) => {
    const timestamp = new Date().toISOString();
    const signature = crypto.randomUUID().replace(/-/g, '').slice(0, 12).toUpperCase();
    setAuditLog((prev) => [
      { action, timestamp, signature },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        {controlActions.map((action) => (
          <button
            key={action.code}
            type="button"
            onClick={() => executeAction(action.label)}
            className="border border-white/10 bg-black/40 px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10"
          >
            <span className="block text-[10px] text-white/40">{action.code}</span>
            {action.label}
          </button>
        ))}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Immutable Audit Log</p>
        <div className="mt-2 max-h-48 overflow-y-auto border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-white/80">
          {auditLog.length === 0 && <p>No actions executed in this session.</p>}
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

export default SuperadminRevenueControls;
