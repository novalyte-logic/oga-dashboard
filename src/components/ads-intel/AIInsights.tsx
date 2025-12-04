'use client';

const insights = [
  {
    platform: 'Google Ads',
    items: [
      'CPA up 3.2% due to Display remarketing saturating. Shift 8% budget to Search exact-match.',
      '72h forecast: spend +6%, revenue +11% if Quality Score maintained >8.3.',
      'Creative fatigue minimal; biggest risk is lost impression share (budget) on GLP-1 queries.',
    ],
  },
  {
    platform: 'TikTok Ads',
    items: [
      'CPA falling (-4.8%) thanks to viral TRT creative. Expect fatigue window in 20h; pre-stage replacement.',
      'Budget misallocation: 14% overspend on cold-peptide audiences; re-route to telehealth retargeting.',
      '72h prediction: ROI stable if hook retention kept above 65%; set auto-rotate for thumbnails.',
    ],
  },
  {
    platform: 'Meta Ads',
    items: [
      'CPA rising (+5.1%) due to frequency build-up in feed placements. Deploy frequency cap at 2.5.',
      'Lookalike ROI diverging between 4% and 6% seeds. Kill 6% seed; consolidate into Reels inventory.',
      'Expected 72h uplift +7% once creative decay resolved with new clinic footage.',
    ],
  },
];

const AIInsights = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 text-sm text-white/80">
      {insights.map((insight) => (
        <div key={insight.platform} className="border border-white/10 bg-black/40 p-4">
          <p className="font-mono text-xs text-white/50">{insight.platform} · Gemini Analysis</p>
          <ul className="mt-2 space-y-2">
            {insight.items.map((item, idx) => (
              <li key={idx} className="border border-white/10 bg-black/30 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AIInsights;
