'use client';

const actions = [
  {
    action: 'Micro ramp +7%',
    target: 'TikTok // TRT Spark',
    reason: 'ROAS 6.2x, CPA -12%',
    forecast: '+$42k net / 6d',
    risk: 'Low',
  },
  {
    action: 'Kill campaign',
    target: 'Meta Feed // Clinic Walk',
    reason: 'Revenue decoupled, fatigue red',
    forecast: 'Stop $8k/day loss',
    risk: 'Medium',
  },
  {
    action: 'Rotate creative',
    target: 'TikTok // Peptide Explainer',
    reason: 'Hook collapse 31%',
    forecast: 'Restore CTR +2.8pp',
    risk: 'Low',
  },
  {
    action: 'Shift budget -18%',
    target: 'Google Display → Search',
    reason: 'Search LTV 2.4x higher',
    forecast: '+$66k net / 7d',
    risk: 'Medium',
  },
];

const AutopilotActions = () => (
  <div className="space-y-2 font-mono text-xs text-white/80">
    {actions.map((entry) => (
      <div key={entry.target} className="border border-white/10 bg-black/40 px-3 py-2">
        <div className="flex justify-between text-white">
          <span>{entry.action}</span>
          <span>{entry.risk} risk</span>
        </div>
        <p className="text-white/70">{entry.target}</p>
        <p className="text-white/60">Reason: {entry.reason}</p>
        <p className="text-teal">Forecast: {entry.forecast}</p>
      </div>
    ))}
  </div>
);

export default AutopilotActions;
