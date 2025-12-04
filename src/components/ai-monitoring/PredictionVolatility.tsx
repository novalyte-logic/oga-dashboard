'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface VolPoint {
  ts: string;
  forecast: number;
}

const PredictionVolatility = () => {
  const [points, setPoints] = useState<VolPoint[]>(() => seed());

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => [...prev.slice(-18), nextPoint(prev.at(-1))]);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
          <XAxis dataKey="ts" tick={{ fill: '#aaa', fontSize: 10 }} />
          <YAxis tick={{ fill: '#aaa', fontSize: 10 }} />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(2)}%`}
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <Line type="monotone" dataKey="forecast" stroke="#00f0b5" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const seed = () => {
  const base: VolPoint[] = [];
  for (let i = 0; i < 20; i++) {
    base.push(nextPoint(base.at(-1)));
  }
  return base;
};

const nextPoint = (prev?: VolPoint): VolPoint => {
  const ts = new Date().toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' });
  const base = prev ? prev.forecast : 7;
  return {
    ts,
    forecast: clamp(base + (Math.random() - 0.5) * 1.2, 3.2, 11.5),
  };
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default PredictionVolatility;
