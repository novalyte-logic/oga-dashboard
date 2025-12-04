'use client';

const campaigns = [
  { name: 'Search ▸ TRT Surge', spend: '$620k', roas: '6.2x', lostIS: '4% budget' },
  { name: 'Display ▸ GLP-1 Awareness', spend: '$380k', roas: '4.1x', lostIS: '12% rank' },
];

const keywords = [
  { term: 'men hormone therapy', cpa: '$92', ctr: '8.1%' },
  { term: 'telehealth trt', cpa: '$76', ctr: '10.4%' },
  { term: 'glp-1 clinic', cpa: '$118', ctr: '5.7%' },
];

const GoogleAdsPanel = () => {
  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">Campaigns</p>
          <div className="mt-2 space-y-2">
            {campaigns.map((camp) => (
              <div key={camp.name} className="border border-white/10 bg-black/40 px-3 py-2">
                <p className="font-mono text-xs text-white/60">{camp.name}</p>
                <p>Spend {camp.spend} · ROAS {camp.roas}</p>
                <p className="text-amber">Lost IS {camp.lostIS}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-black/30 p-3">
          <p className="font-mono text-xs text-white/50">Search vs Display</p>
          <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="border border-white/10 bg-black/40 p-2">
              <p>Search</p>
              <p>Impression share 84%</p>
              <p>Quality score avg 8.7</p>
            </div>
            <div className="border border-white/10 bg-black/40 p-2">
              <p>Display</p>
              <p>Impression share 71%</p>
              <p>Quality score avg 7.9</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-white/60">Lost IS budget: 6.4% · Lost IS rank: 3.1%</p>
        </div>
      </div>
      <div className="border border-white/10 bg-black/30 p-3">
        <p className="font-mono text-xs text-white/50">Top Keywords & Queries</p>
        <div className="mt-2 grid gap-2 md:grid-cols-3 text-xs font-mono">
          {keywords.map((kw) => (
            <div key={kw.term} className="border border-white/10 bg-black/40 px-3 py-2">
              <p>{kw.term}</p>
              <p>CPA {kw.cpa}</p>
              <p>CTR {kw.ctr}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-black/30 p-3">
        <p className="font-mono text-xs text-white/50">Quality Score Heatmap</p>
        <div className="mt-2 grid grid-cols-6 gap-1">
          {[8, 9, 7, 6, 8, 10, 9, 7, 8, 6, 5, 8].map((score, idx) => (
            <div key={idx} className={`p-2 text-center text-xs font-mono ${score >= 8 ? 'bg-teal/30 text-teal' : score >= 7 ? 'bg-amber/30 text-amber' : 'bg-crimson/30 text-crimson'}`}>
              {score}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsPanel;
