'use client';

const signals = [
  { label: 'CTR decay rate', value: '-14% / 24h', severity: 'orange' },
  { label: 'CPM inflation', value: '+11% / 24h', severity: 'yellow' },
  { label: 'Frequency inflation', value: '3.8 avg', severity: 'orange' },
  { label: 'Hook-retention collapse', value: '-17%', severity: 'red' },
  { label: 'Scroll-through rate', value: '42%', severity: 'yellow' },
  { label: 'Engagement velocity decay', value: '-21%', severity: 'red' },
  { label: 'Dwell-time collapse', value: '1.9s avg', severity: 'red' },
];

const color = (severity: string) => {
  switch (severity) {
    case 'green':
      return 'text-teal';
    case 'yellow':
      return 'text-amber';
    case 'orange':
      return 'text-amber';
    case 'red':
      return 'text-crimson';
    default:
      return 'text-white/80';
  }
};

const FatigueSignals = () => (
  <div className="grid gap-3 md:grid-cols-3 font-mono text-xs text-white/80">
    {signals.map((signal) => (
      <div key={signal.label} className="border border-white/10 bg-black/40 px-3 py-2">
        <p className="text-white/50">{signal.label}</p>
        <p className={color(signal.severity)}>{signal.value}</p>
      </div>
    ))}
  </div>
);

export default FatigueSignals;
