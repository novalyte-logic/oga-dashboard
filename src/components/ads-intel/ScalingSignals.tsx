'use client';

const signals = [
  { label: 'CPA', value: '$118', status: 'stable' },
  { label: 'ROAS', value: '5.4x', status: 'bullish' },
  { label: 'Conversion velocity', value: '32h median', status: 'stable' },
  { label: 'Revenue per click', value: '$10.7', status: 'bullish' },
  { label: 'Time-to-conversion', value: '36h', status: 'watch' },
  { label: 'Funnel drop-off', value: 'Clinic lead -16%', status: 'alert' },
  { label: 'Creative fatigue', value: 'Peptide Reels 78%', status: 'alert' },
  { label: 'Platform volatility', value: 'TikTok 12%', status: 'watch' },
  { label: 'Market saturation', value: 'IG Feed 84%', status: 'alert' },
  { label: 'Geo ROI variance', value: 'Miami +22% vs SF -9%', status: 'bullish' },
];

const statusColor = (status: string) => {
  if (status === 'bullish') return 'text-teal';
  if (status === 'alert') return 'text-crimson';
  if (status === 'watch') return 'text-amber';
  return 'text-white/70';
};

const ScalingSignals = () => (
  <div className="grid gap-3 md:grid-cols-2 font-mono text-xs text-white/80">
    {signals.map((signal) => (
      <div key={signal.label} className="border border-white/10 bg-black/40 px-3 py-2">
        <p className="text-white/50">{signal.label}</p>
        <div className="flex justify-between">
          <span>{signal.value}</span>
          <span className={statusColor(signal.status)}>{signal.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export default ScalingSignals;
