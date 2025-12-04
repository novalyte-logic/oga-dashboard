'use client';

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ZAxis,
} from 'recharts';

interface NodePoint {
  name: string;
  x: number;
  y: number;
  intensity: number;
}

const initialPoints: NodePoint[] = [
  { name: 'NA', x: -95, y: 40, intensity: 98 },
  { name: 'SA', x: -60, y: -15, intensity: 62 },
  { name: 'EU', x: 15, y: 50, intensity: 94 },
  { name: 'AF', x: 20, y: 5, intensity: 78 },
  { name: 'AS', x: 90, y: 30, intensity: 96 },
  { name: 'AU', x: 135, y: -23, intensity: 68 },
];

const GlobalDemandMap = () => {
  const [points, setPoints] = useState<NodePoint[]>(initialPoints);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) =>
        prev.map((point) => {
          const adjustment = Math.round(Math.random() * 12 - 6);
          const nextIntensity = Math.max(40, Math.min(110, point.intensity + adjustment));
          return { ...point, intensity: nextIntensity };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-sm border border-white/5 bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,181,0.12),transparent_65%)] opacity-50" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="2 6" />
          <XAxis type="number" dataKey="x" hide domain={[-180, 180]} />
          <YAxis type="number" dataKey="y" hide domain={[-90, 90]} />
          <ZAxis type="number" dataKey="intensity" range={[40, 180]} />
          <Tooltip
            cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1 }}
            contentStyle={{
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 2,
            }}
            labelFormatter={() => ''}
            formatter={(value: number | string, _name, details) => {
              const payload = (details && 'payload' in details ? details.payload : undefined) as
                | NodePoint
                | undefined;
              return [`${value} %`, payload?.name ?? ''];
            }}
          />
          <Scatter
            data={points}
            fill="#00f0b5"
            fillOpacity={0.9}
            shape="circle"
            stroke="#00f0b5"
            strokeWidth={1}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalDemandMap;
