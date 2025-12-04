'use client';

const analysis = [
  '"Creative fatigue detected. Messaging no longer producing novelty; rotate storyline."',
  '"Audience fatigue from frequency poisoning. Reduce Meta feed frequency or narrow retargeting."',
  '"Psychological burnout vs targeting: TikTok Spark fatigue is primarily message exhaustion; targeting still converts."',
];

const GeminiFatigueAnalysis = () => (
  <div className="border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/80">
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Gemini Fatigue Analysis</p>
    <ul className="mt-2 space-y-2">
      {analysis.map((line, idx) => (
        <li key={idx} className="border border-white/10 bg-black/30 px-3 py-2">
          {line}
        </li>
      ))}
    </ul>
  </div>
);

export default GeminiFatigueAnalysis;
