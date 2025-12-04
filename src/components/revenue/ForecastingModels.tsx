'use client';

import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface ForecastPoint {
  window: string;
  base: number;
  best: number;
  worst: number;
}

const scenarioMultipliers = {
  downside: 0.88,
  base: 1,
  optimistic: 1.12,
};

interface ForecastingModelsProps {
  scenario: 'downside' | 'base' | 'optimistic';
}

const ForecastingModels = ({ scenario }: ForecastingModelsProps) => {
  const [data, setData] = useState<ForecastPoint[]>(() => createBase(scenarioMultipliers[scenario]));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((point) => ({
          ...point,
          base: mutate(point.base, 0.02),
          best: mutate(point.best, 0.03),
          worst: mutate(point.worst, 0.02),
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(createBase(scenarioMultipliers[scenario]));
  }, [scenario]);

  return (
    <div className="h-80 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <XAxis dataKey="window" tick={{ fill: '#aaa', fontSize: 11 }} />
          <YAxis
            tickFormatter={(value) => `$${(value / 1_000_000).toFixed(0)}M`}
            tick={{ fill: '#999', fontSize: 11 }}
          />
          <Tooltip
            formatter={(value: number) => `$${(value / 1_000_000).toFixed(1)}M`}
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 2,
            }}
          />
          <Area
            type="monotone"
            dataKey="worst"
            stroke="#f00055"
            fill="rgba(240, 0, 85, 0.15)"
            strokeWidth={2}
            name="Downside"
          />
          <Area
            type="monotone"
            dataKey="base"
            stroke="#f5c137"
            fill="rgba(245, 193, 55, 0.12)"
            strokeWidth={2}
            name="Base"
          />
          <Area
            type="monotone"
            dataKey="best"
            stroke="#00f0b5"
            fill="rgba(0, 240, 181, 0.2)"
            strokeWidth={2}
            name="Upside"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const createBase = (multiplier: number): ForecastPoint[] => [
  { window: '30D', base: 58_000_000 * multiplier, best: 64_000_000 * multiplier, worst: 49_000_000 * multiplier },
  { window: '60D', base: 122_000_000 * multiplier, best: 136_000_000 * multiplier, worst: 101_000_000 * multiplier },
  { window: '90D', base: 198_000_000 * multiplier, best: 224_000_000 * multiplier, worst: 162_000_000 * multiplier },
  { window: 'Expansion', base: 260_000_000 * multiplier, best: 312_000_000 * multiplier, worst: 214_000_000 * multiplier },
];

const mutate = (value: number, ratio: number) => {
  const delta = value * ratio * (Math.random() - 0.5);
  return value + delta;
};

export default ForecastingModels;
