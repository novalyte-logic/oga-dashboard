'use client';

const actions = [
  { creative: 'Meta Reels // Clinic Walk', action: 'Auto-pause', reason: 'CTR collapsed -18%' },
  { creative: 'TikTok // Peptide Explainer', action: 'Rotate backup creative', reason: 'Hook retention 31%' },
  { creative: 'Google Display // Awareness', action: 'Downgrade budget', reason: 'Revenue decoupled' },
  { creative: 'TikTok // Spark ads', action: 'Send alert', reason: 'Audience fatigue triggered' },
];

const FatigueAutoActions = () => (
  <div className="space-y-2 font-mono text-xs text-white/80">
    {actions.map((action) => (
      <div key={action.creative} className="border border-white/10 bg-black/40 px-3 py-2">
        <p className="text-white">{action.creative}</p>
        <p className="text-teal">{action.action}</p>
        <p className="text-white/60">{action.reason}</p>
      </div>
    ))}
  </div>
);

export default FatigueAutoActions;
