'use client';

const treeMap = [
  { label: 'Google Search', revenue: '$6.2M' },
  { label: 'Google Display', revenue: '$2.1M' },
  { label: 'TikTok Spark', revenue: '$3.3M' },
  { label: 'TikTok Prospecting', revenue: '$1.1M' },
  { label: 'Meta Reels', revenue: '$2.4M' },
  { label: 'Meta Feed', revenue: '$1.2M' },
];

const roiLadder = [
  { label: 'Google Search', roi: '6.4x' },
  { label: 'TikTok Spark', roi: '5.1x' },
  { label: 'Meta Reels', roi: '4.2x' },
];

const heatGrid = [
  { label: 'Google // Clinic', profit: '+$2.6M', tone: 'text-teal' },
  { label: 'TikTok // Marketplace', profit: '+$1.8M', tone: 'text-teal' },
  { label: 'Meta // Vendor', profit: '+$0.6M', tone: 'text-amber' },
];

const RevenueVisuals = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 text-sm text-white/80">
      <div className="border border-white/10 bg-black/40 p-3">
        <p className="font-mono text-xs text-white/50">Revenue Tree</p>
        <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-xs">
          {treeMap.map((node) => (
            <div key={node.label} className="border border-white/10 bg-black/30 p-2">
              <p>{node.label}</p>
              <p>{node.revenue}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-black/40 p-3">
        <p className="font-mono text-xs text-white/50">Platform ROI Ladder</p>
        <div className="mt-2 space-y-2 font-mono text-xs">
          {roiLadder.map((row, idx) => (
            <div key={row.label} className="border border-white/10 bg-black/30 px-3 py-2">
              <p>#{idx + 1} {row.label}</p>
              <p>{row.roi}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-black/40 p-3">
        <p className="font-mono text-xs text-white/50">Profit Heat Grid</p>
        <div className="mt-2 space-y-2 font-mono text-xs">
          {heatGrid.map((item) => (
            <div key={item.label} className="border border-white/10 bg-black/30 px-3 py-2">
              <p>{item.label}</p>
              <p className={item.tone}>{item.profit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueVisuals;
