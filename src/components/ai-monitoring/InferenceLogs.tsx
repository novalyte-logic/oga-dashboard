'use client';

import { useEffect, useRef, useState } from 'react';

type Engine =
  | 'Mens Health Symptom Classifier'
  | 'Hormone Risk Engine'
  | 'Provider Matching AI'
  | 'Marketplace ROI AI'
  | 'Vendor Demand Model'
  | 'Abuse Sentinel'
  | 'Forecasting Neural'
  | 'Drift Guardian';

interface LogEvent {
  id: string;
  engine: Engine;
  timestamp: string;
  payload: string;
}

const templates: Record<Engine, string[]> = {
  'Mens Health Symptom Classifier': [
    'Tokenization -> 412 tokens // flagged endocrine anomalies',
    'JSON inference {symptomCluster: "androgenic"} => Σscore 0.83',
  ],
  'Hormone Risk Engine': [
    'Reweighted cortisol baseline using labs feed',
    'Safety gate: PSA delta > 2.1 triggered risk multiplier 1.4x',
  ],
  'Provider Matching AI': [
    'Ranked Clinic H-12A (score 0.94) // capacity 78%',
    'Fallback pipeline engaged for tele-urology availability',
  ],
  'Marketplace ROI AI': [
    'Projected subscription uplift +11% for TRT program',
    'Throttled spend on underperforming metro zone',
  ],
  'Vendor Demand Model': [
    'Demand spike: peptide kits +36% / 4h window',
    'Supply chain signal -> expedite order on vendor VXR-14',
  ],
  'Abuse Sentinel': [
    'Anomaly: duplicate patient fingerprint // routed to audit',
    'Cleared suspicious intake (pattern score 0.12)',
  ],
  'Forecasting Neural': [
    'Long horizon 90d revenue variance ±8.2%',
    'Volatility module recalculating due to APAC demand drift',
  ],
  'Drift Guardian': [
    'Feature drift Δ:0.021 across symptom embeddings',
    'Model temp stable @0.71, no retrain required',
  ],
};

const engines = Object.keys(templates) as Engine[];

const InferenceLogs = () => {
  const [events, setEvents] = useState<LogEvent[]>(() => seedLogs());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents((prev) => [...prev.slice(-14), createEvent()]);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [events]);

  return (
    <div
      ref={ref}
      className="h-72 overflow-y-auto border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs text-white"
    >
      <div className="space-y-2">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col gap-0.5">
            <div className="flex justify-between text-[11px] text-white/40">
              <span>{event.timestamp}</span>
              <span>{event.engine}</span>
            </div>
            <p>{event.payload}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const seedLogs = () => Array.from({ length: 10 }, () => createEvent());

const createEvent = (): LogEvent => {
  const engine = engines[Math.floor(Math.random() * engines.length)];
  const sample = templates[engine];
  return {
    id: crypto.randomUUID(),
    engine,
    timestamp: new Date().toISOString().slice(11, 19),
    payload: sample[Math.floor(Math.random() * sample.length)],
  };
};

export default InferenceLogs;
