'use client';

const creatives = [
  { name: 'TikTok // TRT Lab', status: 'GREEN', note: 'Fresh creative, thumb-stop 3.2s' },
  { name: 'TikTok // Peptide Explainer', status: 'ORANGE', note: 'Watch-time collapse' },
  { name: 'Meta Reels // Clinic Walk', status: 'RED', note: 'Reels saturation, frequency 3.9' },
  { name: 'Google Search // GLP-1', status: 'GREEN', note: 'Quality score stable' },
  { name: 'Meta Feed // Before-After', status: 'YELLOW', note: 'Saves vs impressions drop' },
];

const statusColor = (status: string) => {
  switch (status) {
    case 'GREEN':
      return 'text-teal';
    case 'YELLOW':
      return 'text-amber';
    case 'ORANGE':
      return 'text-amber';
    case 'RED':
      return 'text-crimson';
    default:
      return 'text-white';
  }
};

const FatigueClassification = () => (
  <div className="space-y-2 font-mono text-xs text-white/80">
    {creatives.map((creative) => (
      <div key={creative.name} className="border border-white/10 bg-black/40 px-3 py-2 flex justify-between">
        <div>
          <p className="text-white">{creative.name}</p>
          <p className="text-white/60">{creative.note}</p>
        </div>
        <div className={`text-lg ${statusColor(creative.status)}`}>{creative.status}</div>
      </div>
    ))}
  </div>
);

export default FatigueClassification;
