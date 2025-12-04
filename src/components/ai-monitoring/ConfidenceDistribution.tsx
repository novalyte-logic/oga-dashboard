'use client';

import { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ConfidencePoint {
  bucket: string;
  classifier: number;
  provider: number;
}

const baseData: ConfidencePoint[] = [
  { bucket: '0.5', classifier: 5, provider: 3 },
  { bucket: '0.6', classifier: 11, provider: 7 },
  { bucket: '0.7', classifier: 18, provider: 14 },
  { bucket: '0.8', classifier: 26, provider: 21 },
  { bucket: '0.9', classifier: 34, provider: 29 },
  { bucket: '1.0', classifier: 42, provider: 37 },
];

const ConfidenceDistribution = () => {
  const [data, setData] = useState(baseData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((point) => ({
          ...point,
          classifier: mutate(point.classifier),
          provider: mutate(point.provider),
        }))
      );
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-72 border border-white/10 bg-black/40 px-2 py-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <XAxis dataKey="bucket" tick={{ fill: '#aaa', fontSize: 11 }} />
          <YAxis tick={{ fill: '#aaa', fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <Area type="monotone" dataKey="classifier" stroke="#00f0b5" fill="rgba(0,240,181,0.2)" strokeWidth={2} />
          <Area type="monotone" dataKey="provider" stroke="#f5c137" fill="rgba(245,193,55,0.2)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const mutate = (value: number) => Math.max(2, value + Math.round(Math.random() * 6 - 3));

export default ConfidenceDistribution;
