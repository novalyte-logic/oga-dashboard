'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const burnGrowthData = [
  { month: 'M1', burn: -38, growth: 26 },
  { month: 'M2', burn: -34, growth: 29 },
  { month: 'M3', burn: -30, growth: 33 },
  { month: 'M4', burn: -27, growth: 35 },
  { month: 'M5', burn: -24, growth: 38 },
  { month: 'M6', burn: -21, growth: 41 },
  { month: 'M7', burn: -19, growth: 44 },
  { month: 'M8', burn: -17, growth: 46 },
  { month: 'M9', burn: -15, growth: 49 },
  { month: 'M10', burn: -13, growth: 51 },
];

const categoryROI = [
  { label: 'GLP-1 Programs', value: '168% ROI' },
  { label: 'TRT Marketplace', value: '154% ROI' },
  { label: 'Peptide Suites', value: '129% ROI' },
];

const BoardFinancials = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-5">
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Break-even ETA</p>
          <p className="font-mono text-3xl text-teal">6.2 mo</p>
          <p className="text-sm text-white/60">Projection at current burn/growth delta</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Burn vs Growth Score</p>
          <p className="font-mono text-3xl text-teal">0.78</p>
          <p className="text-sm text-white/60">Closer to zero =&gt; balance point</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Cashflow Projection</p>
          <p className="font-mono text-3xl text-amber">$118M</p>
          <p className="text-sm text-white/60">Positive cashflow @ Q4 close</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Infrastructure ROI</p>
          <p className="font-mono text-3xl text-amber">142%</p>
          <p className="text-sm text-white/60">Projected over 18-month hardware amortization</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Year-end Revenue</p>
          <p className="font-mono text-3xl text-teal">$1.08B</p>
          <p className="text-sm text-white/60">AI aggregated estimate</p>
        </div>
      </div>
      <div className="h-72 border border-white/10 bg-black/40 px-2 py-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={burnGrowthData}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: '#888', fontSize: 11 }} />
            <YAxis tickFormatter={(value) => `${value >= 0 ? '+' : ''}${value}%`} tick={{ fill: '#888', fontSize: 11 }} />
            <Tooltip
              formatter={(value: number) => `${value >= 0 ? '+' : ''}${value}%`}
              contentStyle={{
                background: '#050505',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />
            <Line type="monotone" dataKey="burn" stroke="#f00055" strokeWidth={2} dot={false} name="Burn delta" />
            <Line type="monotone" dataKey="growth" stroke="#00f0b5" strokeWidth={2} dot={false} name="Growth delta" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {categoryROI.map((item) => (
          <div key={item.label} className="border border-white/10 bg-black/40 p-3">
            <p className="font-mono text-xs text-white/40">{item.label}</p>
            <p className="text-lg text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardFinancials;
