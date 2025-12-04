'use client';

const creatives = [
  { name: 'GLP-1 Split Screen', thumbStop: '3.2s', hook: '68%', cpm: '$21', cpa: '$96' },
  { name: 'TRT Lab Walkthrough', thumbStop: '2.7s', hook: '74%', cpm: '$18', cpa: '$82' },
  { name: 'Peptide Explainer', thumbStop: '2.3s', hook: '59%', cpm: '$24', cpa: '$134' },
];

const TikTokPanel = () => {
  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="border border-white/10 bg-black/30 p-3">
        <p className="font-mono text-xs text-white/50">Creative Performance</p>
        <div className="mt-2 grid gap-2 md:grid-cols-3 text-xs font-mono">
          {creatives.map((creative) => (
            <div key={creative.name} className="border border-white/10 bg-black/40 px-3 py-2">
              <p>{creative.name}</p>
              <p>Thumb-stop {creative.thumbStop}</p>
              <p>Hook retention {creative.hook}</p>
              <p>CPM {creative.cpm}</p>
              <p>CPA {creative.cpa}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">CPM vs CPA</p>
          <p>Trend: CPM -2.3% w/w while CPA -4.8% w/w // efficiency improving.</p>
          <p className="text-amber">Monitor midday spikes (12:00-15:00 UTC)</p>
        </div>
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">Viral & Fatigue Alerts</p>
          <ul className="mt-2 space-y-2 font-mono text-xs">
            <li className="text-teal">Creative TRT Lab: Viral probability 68%</li>
            <li className="text-amber">Peptide Explainer: Fatigue predicted in 17h</li>
          </ul>
        </div>
      </div>
      <div className="border border-white/10 bg-black/30 p-3">
        <p className="font-mono text-xs text-white/50">Hook Retention Curve</p>
        <div className="mt-2 flex justify-between font-mono text-xs text-white/60">
          <span>1s: 100%</span>
          <span>3s: 82%</span>
          <span>5s: 69%</span>
          <span>8s: 47%</span>
        </div>
        <div className="mt-2 h-2 bg-white/10">
          <div className="h-full bg-teal" style={{ width: '69%' }} />
        </div>
        <p className="text-xs text-white/50">Thumb-stop ratio 39% // Goal 35%</p>
      </div>
    </div>
  );
};

export default TikTokPanel;
