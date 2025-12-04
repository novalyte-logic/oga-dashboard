'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const driftSeries = [
  { step: 't-5', drift: 0.022, accuracy: 98.2 },
  { step: 't-4', drift: 0.024, accuracy: 97.9 },
  { step: 't-3', drift: 0.028, accuracy: 97.2 },
  { step: 't-2', drift: 0.032, accuracy: 96.7 },
  { step: 't-1', drift: 0.031, accuracy: 96.4 },
  { step: 't0', drift: 0.029, accuracy: 96.9 },
];

const cards = [
  { label: 'Bias deviation', value: '0.018', detail: 'Within guardrail', tone: 'text-teal' },
  { label: 'Dataset freshness', value: '93%', detail: 'Men’s health labs & symptom feeds', tone: 'text-teal' },
  { label: 'Synthetic validation', value: '98.6%', detail: 'Last adversarial batch', tone: 'text-amber' },
];

const ModelHealthSuite = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="border border-white/10 bg-black/40 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{card.label}</p>
            <p className={`font-mono text-2xl ${card.tone}`}>{card.value}</p>
            <p className="text-sm text-white/60">{card.detail}</p>
          </div>
        ))}
      </div>
      <div className="h-72 border border-white/10 bg-black/40 px-2 py-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={driftSeries}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <XAxis dataKey="step" tick={{ fill: '#888', fontSize: 11 }} />
            <YAxis
              yAxisId="left"
              orientation="left"
              tick={{ fill: '#888', fontSize: 11 }}
              tickFormatter={(value) => `Δ${value.toFixed(3)}`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#888', fontSize: 11 }}
              tickFormatter={(value) => `${value.toFixed(1)}%`}
            />
            <Tooltip
              contentStyle={{
                background: '#050505',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              formatter={(value: number, name) =>
                name === 'drift'
                  ? [`Δ${value.toFixed(3)}`, 'Drift']
                  : [`${value.toFixed(1)}%`, 'Accuracy']
              }
            />
            <Line yAxisId="left" type="monotone" dataKey="drift" stroke="#f00055" strokeWidth={2} dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#00f0b5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ModelHealthSuite;
