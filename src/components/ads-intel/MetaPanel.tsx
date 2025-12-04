'use client';

const metaData = {
  reels: { spend: '$420k', roas: '5.8x', freq: 2.1 },
  feed: { spend: '$360k', roas: '3.9x', freq: 3.4 },
};

const MetaPanel = () => {
  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="grid gap-3 md:grid-cols-2">
        {(['reels', 'feed'] as const).map((placement) => (
          <div key={placement} className="border border-white/10 bg-black/30 p-3">
            <p className="font-mono text-xs text-white/50">{placement === 'reels' ? 'Reels' : 'Feed'} Performance</p>
            <p>Spend {metaData[placement].spend}</p>
            <p>ROAS {metaData[placement].roas}</p>
            <p>Ad frequency {metaData[placement].freq}</p>
          </div>
        ))}
      </div>
      <div className="border border-white/10 bg-black/30 p-3">
        <p className="font-mono text-xs text-white/50">Audience Overlap</p>
        <p className="text-xs text-white/60">Lookalike overlap 41% // Warm retargeting overlap 27%</p>
        <div className="mt-2 h-2 bg-white/10">
          <div className="h-full bg-teal" style={{ width: '41%' }} />
        </div>
        <p className="text-xs text-white/60">Action: Expand GLP-1 lookalike seed by +5M</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">Lookalike ROI</p>
          <p>4% LAL: 6.1x ROI</p>
          <p>6% LAL: 4.7x ROI</p>
          <p className="text-amber">Recommendation: throttle 6% LAL by 18%</p>
        </div>
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">Creative Decay Signals</p>
          <ul className="mt-2 space-y-2 font-mono text-xs">
            <li className="text-crimson">Video: Clinic walk-through // decay 14%</li>
            <li className="text-teal">Carousel: Hormone lab // stable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetaPanel;
