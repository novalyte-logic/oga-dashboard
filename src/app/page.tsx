import Panel from '@/components/common/Panel';
import GlobalDemandMap from '@/components/godseye/GlobalDemandMap';
import LiveAIMatches from '@/components/godseye/LiveAIMatches';
import { ShieldCheck } from 'lucide-react';

const signalDiagnostics = [
  { node: 'TRIAGE-NODE-07', status: 'STABLE', metric: '0.92ms jitter', tone: 'text-teal' },
  { node: 'EU-ROUTER-03', status: 'LOAD', metric: '78% throughput', tone: 'text-amber' },
  { node: 'APAC-SEC-CLUSTER', status: 'ALERT', metric: '2 anomalies', tone: 'text-crimson' },
  { node: 'AI-MATCH-PIPE', status: 'SYNC', metric: '12.4k ops/s', tone: 'text-teal' },
];

const metrics = [
  { label: 'Active Clinics', value: '4,211', detail: 'Nodes online' },
  { label: 'Patient Demand', value: '1.98M', detail: 'req/min' },
  { label: 'AI Matches', value: '34,887', detail: 'today' },
  { label: 'Risk Flags', value: '8', detail: 'critical' },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <Panel title="Novalyte Mission Feed" stamp="0x92AF.CMD" subtitle="Command Protocol">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-white/70">
              Monitoring all active care corridors, AI inference clusters, and vendor supply chains in
              one synchronized command surface. All activity is logged with surgical precision — no drift,
              no guesswork.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-sm border border-white/10 bg-black/40 px-4 py-3">
            <ShieldCheck className="text-teal" size={32} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Integrity</p>
              <p className="font-mono text-lg text-teal">99.982%</p>
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel
          title="Global Patient Demand"
          stamp="0x11AF.MAP"
          subtitle="Satellite Heatmap"
          className="xl:col-span-2"
        >
          <GlobalDemandMap />
          <div className="mt-4 grid gap-4 text-sm font-mono text-white/70 sm:grid-cols-3">
            <div>
              <p className="text-white/40">Current Throughput</p>
              <p className="text-lg text-teal">98.7 TB/s</p>
            </div>
            <div>
              <p className="text-white/40">High-Risk Regions</p>
              <p className="text-lg text-amber">4 watchlists</p>
            </div>
            <div>
              <p className="text-white/40">Signal Integrity</p>
              <p className="text-lg text-teal">99.6%</p>
            </div>
          </div>
        </Panel>

        <Panel title="Command Metrics" stamp="0x55BC.STAT" subtitle="Live Telemetry">
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border border-white/10 bg-black/40 p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {metric.label}
                </p>
                <p className="font-mono text-2xl text-white">{metric.value}</p>
                <p className="text-sm text-white/50">{metric.detail}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Live AI Matches" stamp="0xA1F3.LOG" subtitle="Match Stream">
          <LiveAIMatches />
        </Panel>
        <Panel title="Signal Diagnostics" stamp="0xFF21.DIAG" subtitle="Node Health">
          <div className="space-y-3">
            {signalDiagnostics.map((item) => (
              <div
                key={item.node}
                className="flex items-center justify-between border border-white/10 bg-black/30 px-3 py-3"
              >
                <div>
                  <p className="font-mono text-xs text-white/50">{item.node}</p>
                  <p className="text-sm text-white">{item.metric}</p>
                </div>
                <span className={`font-mono text-xs ${item.tone}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
