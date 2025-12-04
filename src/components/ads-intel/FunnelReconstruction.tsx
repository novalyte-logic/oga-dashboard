'use client';

const paths = [
  {
    path: 'TikTok Ad ▸ Blog ▸ Infographic ▸ Assessment ▸ Clinic ▸ Booking ▸ Revenue',
    conversions: 1842,
    revenue: '$6.2M',
    time: '32h median',
  },
  {
    path: 'Google Search ▸ Assessment ▸ Marketplace ▸ Checkout ▸ Purchase',
    conversions: 2680,
    revenue: '$7.4M',
    time: '18h median',
  },
];

const heatLayers = [
  { stage: 'Assessment Start → Assessment Complete', drop: '21%', severity: 'amber' },
  { stage: 'Clinic Lead → Booking', drop: '16%', severity: 'crimson' },
];

const assisted = [
  { platform: 'TikTok', assistShare: '38%', note: 'High upper-funnel influence' },
  { platform: 'Meta', assistShare: '27%', note: 'Lookalike sequences assist conversions' },
  { platform: 'Google', assistShare: '22%', note: 'Last-click heavy but assists from Display' },
];

const FunnelReconstruction = () => {
  return (
    <div className="space-y-4 text-sm text-white/80">
      <div className="border border-white/10 bg-black/40 p-4">
        <p className="font-mono text-xs text-white/50">User Paths</p>
        <div className="mt-2 space-y-2">
          {paths.map((p) => (
            <div key={p.path} className="border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs">
              <p>{p.path}</p>
              <p>Conversions {p.conversions.toLocaleString()} · Revenue {p.revenue} · {p.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="font-mono text-xs text-white/50">Drop-off Heat Layers</p>
          <div className="mt-2 space-y-2 font-mono text-xs">
            {heatLayers.map((layer) => (
              <div key={layer.stage} className={`border border-white/10 px-3 py-2 ${layer.severity === 'crimson' ? 'bg-crimson/10 text-crimson' : 'bg-amber/10 text-amber'}`}>
                <p>{layer.stage}</p>
                <p>{layer.drop} loss</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 p-4">
          <p className="font-mono text-xs text-white/50">Assisted Conversions</p>
          <div className="mt-2 space-y-2 font-mono text-xs">
            {assisted.map((a) => (
              <div key={a.platform} className="border border-white/10 bg-black/30 px-3 py-2">
                <p>{a.platform} · Assist share {a.assistShare}</p>
                <p>{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/60">
        <p>Time-to-conversion Distribution: Median 36h · P75 54h · P95 96h. Repeat touches average 3.7 before revenue.</p>
      </div>
    </div>
  );
};

export default FunnelReconstruction;
