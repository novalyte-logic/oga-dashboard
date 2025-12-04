'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const datasets = {
  daily: [
    { label: '00h', revenue: 4.2 },
    { label: '04h', revenue: 6.1 },
    { label: '08h', revenue: 8.9 },
    { label: '12h', revenue: 11.3 },
    { label: '16h', revenue: 13.4 },
    { label: '20h', revenue: 12.2 },
    { label: '24h', revenue: 14.6 },
  ],
  weekly: [
    { label: 'Mon', revenue: 82 },
    { label: 'Tue', revenue: 88 },
    { label: 'Wed', revenue: 95 },
    { label: 'Thu', revenue: 91 },
    { label: 'Fri', revenue: 103 },
    { label: 'Sat', revenue: 112 },
    { label: 'Sun', revenue: 99 },
  ],
  monthly: [
    { label: 'Week 1', revenue: 380 },
    { label: 'Week 2', revenue: 412 },
    { label: 'Week 3', revenue: 458 },
    { label: 'Week 4', revenue: 501 },
  ],
};

const RevenueCurves = () => {
  const [frame, setFrame] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['daily', 'weekly', 'monthly'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFrame(option)}
            className={`border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] ${
              frame === option ? 'bg-teal/20 text-teal' : 'bg-black/30 text-white/60'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="h-72 border border-white/10 bg-black/40 px-2 py-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datasets[frame]}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <XAxis dataKey="label" tick={{ fill: '#aaa', fontSize: 11 }} />
            <YAxis tickFormatter={(value) => `$${value}M`} tick={{ fill: '#aaa', fontSize: 11 }} />
            <Tooltip
              formatter={(value: number) => `$${value}M`}
              contentStyle={{
                background: '#050505',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#00f0b5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCurves;
