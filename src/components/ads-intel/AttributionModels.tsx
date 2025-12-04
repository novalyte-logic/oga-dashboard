'use client';

import { useMemo, useState } from 'react';

const models = [
  { key: 'revenue-weighted', label: 'Revenue-weighted (Primary)' },
  { key: 'first-click', label: 'First Click' },
  { key: 'last-click', label: 'Last Click' },
  { key: 'time-decay', label: 'Time Decay' },
  { key: 'position-based', label: 'Position Based' },
] as const;

const modelData: Record<
  typeof models[number]['key'],
  { spend: number; revenue: number; profit: number; roas: number }
> = {
  'revenue-weighted': { spend: 3.42, revenue: 18.56, profit: 15.14, roas: 5.43 },
  'first-click': { spend: 3.42, revenue: 17.12, profit: 13.7, roas: 5.0 },
  'last-click': { spend: 3.42, revenue: 16.4, profit: 12.98, roas: 4.8 },
  'time-decay': { spend: 3.42, revenue: 17.96, profit: 14.54, roas: 5.25 },
  'position-based': { spend: 3.42, revenue: 17.28, profit: 13.86, roas: 5.05 },
};

const AttributionModels = () => {
  const [activeModel, setActiveModel] = useState<typeof models[number]['key']>('revenue-weighted');

  const active = useMemo(() => modelData[activeModel], [activeModel]);

  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="flex flex-wrap gap-2">
        {models.map((model) => (
          <button
            key={model.key}
            type="button"
            onClick={() => setActiveModel(model.key)}
            className={`border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] ${
              model.key === activeModel ? 'bg-teal/20 text-teal' : 'bg-black/40 text-white'
            }`}
          >
            {model.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-4 font-mono text-xs">
        <StatCard label="Spend (M)" value={`$${active.spend.toFixed(2)}`} />
        <StatCard label="Revenue (M)" value={`$${active.revenue.toFixed(2)}`} />
        <StatCard label="Net Profit (M)" value={`$${active.profit.toFixed(2)}`} />
        <StatCard label="ROAS" value={`${active.roas.toFixed(2)}x`} />
      </div>
      <p className="text-xs text-white/60">
        Revenue-weighted attribution applies decay weighting to every session and ties revenue to the touchpoint mix.
        Toggle models to audit drift or bias.
      </p>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="border border-white/10 bg-black/40 px-3 py-2">
    <p className="text-white/50">{label}</p>
    <p className="text-xl text-white">{value}</p>
  </div>
);

export default AttributionModels;
