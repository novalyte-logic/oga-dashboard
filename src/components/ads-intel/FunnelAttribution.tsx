'use client';

const steps = [
  { label: 'Clicks', value: 1_742_000 },
  { label: 'Patient Assessments', value: 412_000 },
  { label: 'Clinic Leads', value: 186_000 },
  { label: 'Marketplace Purchases', value: 74_200 },
  { label: 'Vendor Inquiries', value: 18_400 },
];

const dropOffs = [
  { stage: 'Assessment -> Lead', reason: 'Form friction // 13% abandon', severity: 'amber' },
  { stage: 'Lead -> Purchase', reason: 'Clinic backlog // 8% delay', severity: 'crimson' },
];

const FunnelAttribution = () => {
  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="grid gap-2 md:grid-cols-5">
        {steps.map((step, idx) => (
          <div key={step.label} className="border border-white/10 bg-black/40 px-3 py-4 text-center">
            <p className="font-mono text-xs text-white/50">{step.label}</p>
            <p className="text-xl font-mono text-white">{step.value.toLocaleString()}</p>
            {idx < steps.length - 1 && (
              <p className="text-[11px] text-white/40">→ {(100 * (steps[idx + 1].value / step.value)).toFixed(1)}% pass-through</p>
            )}
          </div>
        ))}
      </div>
      <div className="border border-white/10 bg-black/40 p-4">
        <p className="font-mono text-xs text-white/50">Drop-off Heatmap</p>
        <div className="mt-2 space-y-2 font-mono text-xs">
          {dropOffs.map((drop) => (
            <div key={drop.stage} className={`border border-white/10 px-3 py-2 ${drop.severity === 'crimson' ? 'bg-crimson/10 text-crimson' : 'bg-amber/10 text-amber'}`}>
              <p>{drop.stage}</p>
              <p>{drop.reason}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-black/40 p-4">
        <p className="font-mono text-xs text-white/50">Time-to-Convert</p>
        <div className="mt-2 flex justify-between font-mono text-xs text-white/60">
          <span>Median: 36h</span>
          <span>P75: 54h</span>
          <span>P95: 96h</span>
        </div>
        <div className="mt-2 h-2 bg-white/10">
          <div className="h-full bg-teal" style={{ width: '48%' }} />
        </div>
      </div>
    </div>
  );
};

export default FunnelAttribution;
