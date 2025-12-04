'use client';

const stages = [
  { title: 'Attribution Engine', detail: 'Impression → Revenue mapping' },
  { title: 'Creative Fatigue Engine', detail: 'Psychological decay detection' },
  { title: 'Budget Auto-Scaling', detail: 'Micro/medium/hard ramps' },
  { title: 'Revenue Forecasting', detail: '24h / 72h / 7d profit projection' },
  { title: 'Risk Control', detail: 'Loss caps, drawdowns, volatility dampeners' },
];

const AutopilotFlow = () => (
  <div className="grid gap-3 md:grid-cols-5 font-mono text-xs text-white/80">
    {stages.map((stage) => (
      <div key={stage.title} className="border border-white/10 bg-black/40 px-3 py-3">
        <p className="text-white">{stage.title}</p>
        <p className="text-white/60">{stage.detail}</p>
      </div>
    ))}
  </div>
);

export default AutopilotFlow;
