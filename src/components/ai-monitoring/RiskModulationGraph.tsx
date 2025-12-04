'use client';

import { useEffect, useState } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Area,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface RiskPoint {
  ts: string;
  modulation: number;
  safety: number;
}

const RiskModulationGraph = () => {
  const [points, setPoints] = useState<RiskPoint[]>(() => initPoints());

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => [...prev.slice(-20), createPoint(prev.at(-1))]);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-72 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={points}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
          <XAxis dataKey="ts" tick={{ fill: '#888', fontSize: 10 }} />
          <YAxis domain={[0, 10]} tick={{ fill: '#888', fontSize: 10 }} />
          <Tooltip
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="modulation"
            fill="rgba(0,240,181,0.12)"
            stroke="#00f0b5"
            strokeWidth={2}
            isAnimationActive={false}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="safety"
            stroke="#f00055"
            strokeWidth={2}
            isAnimationActive={false}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

const initPoints = () => {
  const data: RiskPoint[] = [];
  for (let i = 0; i < 18; i++) {
    data.push(createPoint(data.at(-1)));
  }
  return data;
};

const createPoint = (previous?: RiskPoint): RiskPoint => {
  const modulation = clamp((previous?.modulation ?? 4.3) + (Math.random() * 1.2 - 0.6), 2, 8.5);
  const safety = clamp((previous?.safety ?? 2.4) + (Math.random() * 1 - 0.5), 1, 6);
  return {
    ts: new Date().toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' }),
    modulation: parseFloat(modulation.toFixed(2)),
    safety: parseFloat(safety.toFixed(2)),
  };
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default RiskModulationGraph;
