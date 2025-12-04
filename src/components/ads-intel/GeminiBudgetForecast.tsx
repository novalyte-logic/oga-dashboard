'use client';

const forecasts = [
  { horizon: '24h', narrative: 'Scale TikTok prospecting +14% if volatility < 15%. Miami geo ROI +22% opportunity.' },
  { horizon: '72h', narrative: 'Google Search ROI will decay within 48h unless GLP-1 creative is refreshed.' },
  { horizon: 'Creative decay', narrative: 'Meta Reels creative ID R-118 fatigue in 36h; pre-stage swap.' },
  { horizon: 'Market fatigue', narrative: 'Instagram feed oversaturated; hold spend flat and move budget to Reels.' },
  { horizon: 'Geo pocket', narrative: 'Phoenix +17% projected revenue; redirect 60k/day from Houston.' },
];

const GeminiBudgetForecast = () => (
  <div className="space-y-2 font-mono text-xs text-white/80">
    {forecasts.map((forecast) => (
      <div key={forecast.horizon} className="border border-white/10 bg-black/40 px-3 py-2">
        <p className="text-white/50">{forecast.horizon}</p>
        <p>{forecast.narrative}</p>
      </div>
    ))}
  </div>
);

export default GeminiBudgetForecast;
