'use client';

import { useMemo, useState } from 'react';
import ForecastingModels from './ForecastingModels';

const scenarioMap = {
  '-1': {
    label: 'Downside',
    tone: 'text-crimson',
    narrative:
      'Marketplace softness and vendor lags. Maintain liquidity buffers and tighten partner payouts.',
  },
  '0': {
    label: 'Base',
    tone: 'text-amber',
    narrative:
      'Steady expansion driven by TRT + GLP-1 demand. AI advises incremental capital deployment.',
  },
  '1': {
    label: 'Optimistic',
    tone: 'text-teal',
    narrative:
      'Network scaling outpaces expectation. Ready clinics and vendors for accelerated payouts.',
  },
} as const;

const ScenarioForecast = () => {
  const [scenario, setScenario] = useState<-1 | 0 | 1>(0);

  const dataKey = useMemo(() => {
    if (scenario === -1) return 'downside';
    if (scenario === 1) return 'optimistic';
    return 'base';
  }, [scenario]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scenario slider
        </label>
        <input
          type="range"
          min={-1}
          max={1}
          step={1}
          value={scenario}
          onChange={(e) => setScenario(Number(e.target.value) as -1 | 0 | 1)}
          className="mt-2 w-full accent-teal"
        />
        <div className={`font-mono text-sm ${scenarioMap[String(scenario)].tone}`}>
          {scenarioMap[String(scenario)].label}
        </div>
      </div>
      <ForecastingModels scenario={dataKey} />
      <div className="border border-white/10 bg-black/40 p-4 text-sm text-white/70">
        <p className="font-mono text-xs text-white/40">AI Narrative</p>
        <p>{scenarioMap[String(scenario)].narrative}</p>
      </div>
    </div>
  );
};

export default ScenarioForecast;
