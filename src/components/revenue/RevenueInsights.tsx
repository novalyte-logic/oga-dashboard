'use client';

const productProfitability = [
  { product: 'GLP-1 Therapy', margin: '72%', note: 'Network subsidy high but ROI positive' },
  { product: 'TRT Programs', margin: '65%', note: 'Low churn clinics driving profit' },
  { product: 'Peptide Protocols', margin: '58%', note: 'Vendor sourcing still premium' },
];

const topGeos = [
  { geo: 'NYC Metro', revenue: '$82M', detail: '+18% w/w' },
  { geo: 'Texas Triangle', revenue: '$64M', detail: '+11% w/w' },
  { geo: 'SoCal Corridor', revenue: '$51M', detail: '+9% w/w' },
];

const RevenueInsights = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="border border-white/10 bg-black/40 p-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Product Profitability</p>
        <div className="mt-3 space-y-3 text-sm text-white/80">
          {productProfitability.map((item) => (
            <div key={item.product} className="border border-white/10 bg-black/30 px-3 py-2">
              <div className="flex justify-between font-mono text-xs text-white/50">
                <span>{item.product}</span>
                <span className="text-teal">{item.margin}</span>
              </div>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-black/40 p-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Top Earning Geographies</p>
        <div className="mt-3 space-y-3 text-sm text-white/80">
          {topGeos.map((geo) => (
            <div key={geo.geo} className="border border-white/10 bg-black/30 px-3 py-2">
              <div className="flex justify-between font-mono text-xs text-white/50">
                <span>{geo.geo}</span>
                <span>{geo.revenue}</span>
              </div>
              <p>{geo.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueInsights;
