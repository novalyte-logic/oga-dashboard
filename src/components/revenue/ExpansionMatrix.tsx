'use client';

const items = [
  { label: 'Market Expansion / 90d', value: '+38 clinics', detail: 'APAC + LATAM corridors' },
  { label: 'Network Scaling Curve', value: '1.8x capacity', detail: 'Projected by AI triage load' },
  { label: 'Equipment ROI', value: '156%', detail: 'Robotic suites amortized in 14 mo' },
  { label: 'Subscription Growth', value: '+22%', detail: 'Recurring strategic partners' },
];

const ExpansionMatrix = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="border border-white/10 bg-black/40 px-4 py-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</p>
          <p className="font-mono text-2xl text-teal">{item.value}</p>
          <p className="text-sm text-white/60">{item.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpansionMatrix;
