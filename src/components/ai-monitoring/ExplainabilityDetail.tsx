'use client';

const influencingVariables = [
  { label: 'Androgen panel volatility', weight: 0.29 },
  { label: 'PSA delta trajectory', weight: 0.24 },
  { label: 'Symptom cluster: metabolic', weight: 0.17 },
  { label: 'Clinic H-12A readiness', weight: 0.16 },
  { label: 'Vendor fulfillment latency', weight: 0.09 },
];

const riskMultipliers = [
  { label: 'Hormone imbalance', value: 2.2 },
  { label: 'Cardio comorbidity', value: 1.6 },
  { label: 'Telehealth dependency', value: 1.2 },
];

const providerLogic = [
  { step: 'Filter', detail: 'Excluded clinics lacking TRT robotics or with open alerts' },
  { step: 'Rank', detail: 'Weighted capacity, hormone expertise, geo-latency to patient' },
  { step: 'Select', detail: 'Clinic H-12A score 0.95, fallback H-08C score 0.88' },
];

const safetyExclusions = [
  'Clinic 9B – hormone mixing audit expired',
  'Vendor VXR-14 – shipping throttle active (cold storage risk)',
];

const scenarioShifts = [
  { label: 'If PSA lowered by 15%', result: 'Risk multiplier drops to 1.1x, Clinic H-12A still #1' },
  { label: 'If symptom token “sleep-fragment” removed', result: 'Confidence -4%, telehealth fallback engaged' },
  { label: 'If vendor backlog cleared', result: 'Marketplace ROI increases subsidy +3%' },
];

const ExplainabilityDetail = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Top Variables & Weights</h3>
        <div className="space-y-2">
          {influencingVariables.map((variable) => (
            <div key={variable.label}>
              <div className="flex justify-between text-xs text-white/60">
                <span>{variable.label}</span>
                <span className="font-mono text-white">{(variable.weight * 100).toFixed(0)}%</span>
              </div>
              <div className="h-1 bg-white/10">
                <div className="h-full bg-teal" style={{ width: `${variable.weight * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Risk Multipliers</h3>
        <div className="space-y-2 font-mono text-sm text-white/80">
          {riskMultipliers.map((risk) => (
            <div key={risk.label} className="flex justify-between border border-white/10 px-3 py-2">
              <span>{risk.label}</span>
              <span className="text-amber">{risk.value.toFixed(2)}x</span>
            </div>
          ))}
        </div>
        <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Scenario Projections</h3>
        <div className="space-y-2 text-sm text-white/80">
          {scenarioShifts.map((scenario) => (
            <div key={scenario.label} className="border border-white/10 bg-black/30 px-3 py-2">
              <p className="font-mono text-xs text-white/40">{scenario.label}</p>
              <p>{scenario.result}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Provider Ranking Logic</h3>
          <ol className="mt-2 space-y-3 text-sm text-white/80">
            {providerLogic.map((logic, index) => (
              <li key={logic.step} className="border border-white/10 bg-black/30 p-3">
                <p className="font-mono text-xs text-white/50">
                  Step {index + 1}: {logic.step}
                </p>
                <p>{logic.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Safety Exclusion Rules</h3>
          <ul className="mt-2 space-y-2 text-sm text-white/70">
            {safetyExclusions.map((item) => (
              <li key={item} className="border border-white/10 bg-black/30 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Why this decision?</h3>
          <p className="text-sm text-white/70">
            Symptom classifier consensus with hormone risk engine insisted on Tier-3 urgency. Provider Matching AI
            delivered Clinic H-12A as optimal due to TRT robotics + hormone lab adjacency, while Marketplace ROI AI
            validated the spend. Safety gate overrides were satisfied after Superadmin review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplainabilityDetail;
