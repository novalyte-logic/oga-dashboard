'use client';

const comparisonRows = [
  { metric: 'Revenue (M)', models: { 'Revenue-weighted': 18.56, 'First Click': 17.12, 'Last Click': 16.4, 'Time Decay': 17.96, 'Position Based': 17.28 } },
  { metric: 'Net Profit (M)', models: { 'Revenue-weighted': 15.14, 'First Click': 13.7, 'Last Click': 12.98, 'Time Decay': 14.54, 'Position Based': 13.86 } },
  { metric: 'ROAS', models: { 'Revenue-weighted': 5.43, 'First Click': 5.0, 'Last Click': 4.8, 'Time Decay': 5.25, 'Position Based': 5.05 } },
];

const AttributionComparison = () => {
  return (
    <div className="overflow-x-auto border border-white/10 bg-black/40 text-sm text-white/80">
      <table className="w-full border-collapse font-mono text-xs">
        <thead>
          <tr className="bg-black/60 text-white/50">
            <th className="border border-white/10 px-3 py-2 text-left">Metric</th>
            {Object.keys(comparisonRows[0].models).map((model) => (
              <th key={model} className="border border-white/10 px-3 py-2 text-left">
                {model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.metric}>
              <td className="border border-white/10 px-3 py-2 text-white">{row.metric}</td>
              {Object.entries(row.models).map(([model, value]) => (
                <td key={model} className="border border-white/10 px-3 py-2">
                  {row.metric.includes('Revenue') || row.metric.includes('Profit')
                    ? `$${value.toFixed(2)}`
                    : `${value.toFixed(2)}${row.metric === 'ROAS' ? 'x' : ''}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttributionComparison;
