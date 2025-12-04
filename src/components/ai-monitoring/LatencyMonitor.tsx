'use client';

import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface LatencyPoint {
  ts: string;
  reasoning: number;
  routing: number;
}

const LatencyMonitor = () => {
  const [data, setData] = useState<LatencyPoint[]>(() => seed());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev.slice(-18), buildPoint(prev[prev.length - 1])]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <XAxis dataKey="ts" tick={{ fill: '#777', fontSize: 10 }} />
          <YAxis domain={[0, 350]} tick={{ fill: '#777', fontSize: 10 }} />
          <Tooltip
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="reasoning"
            stroke="#00f0b5"
            fill="rgba(0, 240, 181, 0.15)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            dataKey="routing"
            stroke="#f5c137"
            fill="rgba(245, 193, 55, 0.15)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const seed = () => {
  const points: LatencyPoint[] = [];
  for (let i = 0; i < 20; i++) {
    points.push(buildPoint(points[i - 1]));
  }
  return points;
};

const buildPoint = (previous?: LatencyPoint): LatencyPoint => {
  const ts = new Date().toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' });
  const baseReasoning = previous ? previous.reasoning : 210;
  const baseRouting = previous ? previous.routing : 140;
  return {
    ts,
    reasoning: clamp(baseReasoning + Math.round(Math.random() * 18 - 9), 150, 320),
    routing: clamp(baseRouting + Math.round(Math.random() * 15 - 7), 80, 260),
  };
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default LatencyMonitor;
