'use client';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const spendRevenueData = [
  { hour: '00h', spend: 110, revenue: 620 },
  { hour: '04h', spend: 140, revenue: 710 },
  { hour: '08h', spend: 210, revenue: 980 },
  { hour: '12h', spend: 320, revenue: 1320 },
  { hour: '16h', spend: 380, revenue: 1480 },
  { hour: '20h', spend: 430, revenue: 1620 },
];

const platformROI = [
  { platform: 'Google', roas: 5.8, spend: 1.6 },
  { platform: 'TikTok', roas: 4.9, spend: 0.9 },
  { platform: 'Meta', roas: 4.1, spend: 0.8 },
];

const campaignMatrix = [
  { campaign: 'GLP-1 Google Search', status: 'Winner', roi: '6.4x' },
  { campaign: 'TRT TikTok Spark', status: 'Scaling', roi: '5.1x' },
  { campaign: 'Meta Reels Clinic', status: 'Watch', roi: '3.7x' },
];

const BoardTrafficViews = () => {
  return (
    <div className="space-y-6 text-sm text-white/80">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-white/10 bg-black/40 p-3">
          <p className="font-mono text-xs text-white/50">Spend vs Revenue (24h)</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendRevenueData}>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <XAxis dataKey="hour" tick={{ fill: '#aaa', fontSize: 11 }} />
                <YAxis tickFormatter={(v) => `$${v}k`} tick={{ fill: '#aaa', fontSize: 11 }} />
                <Tooltip formatter={(v: number) => `$${v}k`} />
                <Legend />
                <Line type="monotone" dataKey="spend" stroke="#f00055" strokeWidth={2} name="Spend" />
                <Line type="monotone" dataKey="revenue" stroke="#00f0b5" strokeWidth={2} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 p-3">
          <p className="font-mono text-xs text-white/50">Platform ROI</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformROI}>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="platform" tick={{ fill: '#aaa', fontSize: 11 }} />
                <YAxis yAxisId="left" tick={{ fill: '#aaa', fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: '#aaa', fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="roas" fill="#00f0b5" name="ROAS" />
                <Bar yAxisId="right" dataKey="spend" fill="#f5c137" name="Spend (M)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-white/10 bg-black/40 p-3">
          <p className="font-mono text-xs text-white/50">Campaign Winner Matrix</p>
          <div className="mt-2 space-y-2 font-mono text-xs">
            {campaignMatrix.map((row) => (
              <div key={row.campaign} className="border border-white/10 bg-black/30 px-3 py-2">
                <p>{row.campaign}</p>
                <p className="text-teal">{row.status} · {row.roi}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 p-3">
          <p className="font-mono text-xs text-white/50">Geo / Device / Time Performance</p>
          <p className="text-xs text-white/60">Top geo: NYC (ROAS 6.7x). Device: iOS 62% share. Time window: 09-13 UTC highest conversion.</p>
          <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-xs">
            <div className="border border-white/10 bg-black/30 p-2">
              <p>Geo</p>
              <p>NYC 6.7x</p>
              <p>Texas 5.1x</p>
            </div>
            <div className="border border-white/10 bg-black/30 p-2">
              <p>Device</p>
              <p>iOS 62%</p>
              <p>Android 34%</p>
            </div>
            <div className="border border-white/10 bg-black/30 p-2">
              <p>Time</p>
              <p>09-13 UTC</p>
              <p>ROAS +12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardTrafficViews;
