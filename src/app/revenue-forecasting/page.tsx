import Panel from '@/components/common/Panel';
import RevenueMetrics from '@/components/revenue/RevenueMetrics';
import RevenueCurves from '@/components/revenue/RevenueCurves';
import RevenueBreakdown from '@/components/revenue/RevenueBreakdown';
import RevenueInsights from '@/components/revenue/RevenueInsights';
import ScenarioForecast from '@/components/revenue/ScenarioForecast';
import ExpansionMatrix from '@/components/revenue/ExpansionMatrix';
import LeakDetection from '@/components/revenue/LeakDetection';
import SuperadminRevenueControls from '@/components/revenue/SuperadminRevenueControls';
import BoardFinancials from '@/components/revenue/BoardFinancials';

const trustBar = [
  { label: 'Capital Efficiency', value: '1.34x', tone: 'text-teal' },
  { label: 'Downside Risk', value: '18.2%', tone: 'text-amber' },
  { label: 'Liquidity Buffer', value: '11.4 mo', tone: 'text-teal' },
  { label: 'Emergency Freeze Readiness', value: 'Armed', tone: 'text-crimson' },
];

export default function RevenueForecastingPage() {
  return (
    <div className="space-y-6">
      <Panel title="Superadmin Financial Command" stamp="0xFIN.INTEL" subtitle="Single Operator">
        <p className="text-sm text-white/70">
          Hedge-fund terminal fused with Novalyte’s medical infrastructure HQ. One Superadmin directs every
          revenue stream, forecast scenario, and override. No RBAC. No friction. Every action is logged with
          immutable signatures.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {trustBar.map((item) => (
            <div key={item.label} className="border border-white/10 bg-black/40 p-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</p>
              <p className={`font-mono text-xl ${item.tone}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Core Financial Intelligence" stamp="0xREV.CORE" subtitle="Revenue Grid">
        <div className="space-y-6">
          <RevenueMetrics />
          <RevenueCurves />
        </div>
      </Panel>

      <Panel title="Revenue Composition" stamp="0xBRKDWN" subtitle="Clinic / Vendor / Category">
        <div className="space-y-6">
          <RevenueBreakdown />
          <RevenueInsights />
        </div>
      </Panel>

      <Panel title="Revenue Forecasting Engine" stamp="0xF0RC.ENG" subtitle="Predictive Models">
        <div className="space-y-5">
          <ScenarioForecast />
          <ExpansionMatrix />
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Revenue Leak Detection" stamp="0xLEAK.SCAN" subtitle="Autonomous Flags">
          <LeakDetection />
        </Panel>
        <Panel title="Superadmin Control Layer" stamp="0xCTRL.OPS" subtitle="Override Console">
          <SuperadminRevenueControls />
        </Panel>
      </div>

      <Panel title="Board-Level Financial View" stamp="0xBOARD" subtitle="Investor Surface">
        <BoardFinancials />
      </Panel>
    </div>
  );
}
