'use client';

const narratives = [
  '"TikTok Spark creative #A14 is responsible for 43% of downstream marketplace revenue via assisted conversions in the last 72h."',
  '"Instagram Lookalike 4% appears negative on last-click ROAS but closes high-LTV patients at day 17; revenue-weighted attribution shows +3.8x ROI."',
  '"Google Display remarketing is leaking $120k/day due to time-decay bias; reassign 6% of spend to exact-match GLP-1 terms."',
];

const GeminiAttribution = () => {
  return (
    <div className="border border-white/10 bg-black/40 p-4 text-sm text-white/80">
      <p className="font-mono text-xs text-white/50">Gemini Attribution Notes</p>
      <ul className="mt-2 space-y-2 font-mono text-xs">
        {narratives.map((line, idx) => (
          <li key={idx} className="border border-white/10 bg-black/30 px-3 py-2">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeminiAttribution;
