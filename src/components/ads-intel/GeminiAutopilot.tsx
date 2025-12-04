'use client';

const outputs = [
  '"Scaling TikTok Spark +18% yields +$42,300 net over 6 days with drawdown risk under 2.3%."',
  '"Instagram audience fatigue will destroy ROI in 36 hours unless creative rotation occurs; shift 40k/day to Reels replacements."',
  '"Google Search GLP-1 intent will decay in 48 hours without copy refresh; predicted ROAS drop 0.9x."',
  '"Geo-pocket: Phoenix telehealth spikes projected +21%; reallocate 60k/day from Houston."',
];

const GeminiAutopilot = () => (
  <div className="border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/80">
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Gemini Autopilot Brain</p>
    <ul className="mt-2 space-y-2">
      {outputs.map((item, idx) => (
        <li key={idx} className="border border-white/10 bg-black/30 px-3 py-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default GeminiAutopilot;
