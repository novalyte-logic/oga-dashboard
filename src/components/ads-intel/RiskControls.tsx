'use client';

const riskMetrics = [
  { label: 'Max daily loss limit', value: '$480k', status: 'intact' },
  { label: 'Per-platform drawdown cap', value: '12% / platform', status: 'watch' },
  { label: 'Emergency stop-loss trigger', value: 'Active', status: 'armed' },
  { label: 'Volatility dampening', value: '0.62 factor', status: 'applied' },
];

const RiskControls = () => (
  <div className="grid gap-3 md:grid-cols-2 font-mono text-xs text-white/80">
    {riskMetrics.map((metric) => (
      <div key={metric.label} className="border border-white/10 bg-black/40 px-3 py-2">
        <p className="text-white/50">{metric.label}</p>
        <div className="flex justify-between">
          <span>{metric.value}</span>
          <span className="text-teal">{metric.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export default RiskControls;
