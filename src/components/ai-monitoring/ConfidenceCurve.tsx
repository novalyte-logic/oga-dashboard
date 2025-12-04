'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface ConfidencePoint {
  ts: string;
  high: number;
  low: number;
}

const ConfidenceCurve = () => {
  const [data, setData] = useState<ConfidencePoint[]>(() => buildSeed());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [...prev.slice(-14), nextPoint(prev[prev.length - 1])];
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" />
          <XAxis dataKey="ts" tick={{ fill: '#777', fontSize: 10 }} />
          <YAxis domain={[0, 100]} tick={{ fill: '#777', fontSize: 10 }} />
          <Tooltip
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <Line
            type="monotone"
            dataKey="high"
            stroke="#00f0b5"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="low"
            stroke="#f00055"
            strokeWidth={1}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const buildSeed = () => {
  const base: ConfidencePoint[] = [];
  for (let i = 0; i < 16; i++) {
    base.push(nextPoint(base[i - 1]));
  }
  return base;
};

const nextPoint = (previous?: ConfidencePoint) => {
  const ts = new Date().toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' });
  const highBase = previous ? previous.high : 88;
  const lowBase = previous ? previous.low : 62;
  return {
    ts,
    high: clamp(highBase + Math.round(Math.random() * 6 - 3), 70, 98),
    low: clamp(lowBase + Math.round(Math.random() * 6 - 3), 40, 85),
  };
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default ConfidenceCurve;
