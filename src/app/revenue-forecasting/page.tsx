import Panel from '@/components/common/Panel';
import RevenueMetrics from '@/components/revenue/RevenueMetrics';
import ForecastingModels from '@/components/revenue/ForecastingModels';
import RevenueBreakdown from '@/components/revenue/RevenueBreakdown';
import ExpansionMatrix from '@/components/revenue/ExpansionMatrix';
import LeakDetection from '@/components/revenue/LeakDetection';
import ControlOverrides from '@/components/revenue/ControlOverrides';
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
      <Panel title="Revenue Control & Financial Intelligence" stamp="0xFIN.INTEL" subtitle="Strategic Ops">
        <div className="grid gap-4 lg:grid-cols-2">
          <p className="text-sm text-white/70">
            Hedge-fund grade telemetry for Novalyte&apos;s healthcare marketplace. Every clinic, vendor,
            and AI monetization channel feeds this command surface. Use it to execute predictive revenue
            warfare, neutralize leaks, and prime capital allocation at board velocity.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustBar.map((item) => (
              <div key={item.label} className="border border-white/10 bg-black/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</p>
                <p className={`font-mono text-xl ${item.tone}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      <Panel title="Core Financial Intelligence" stamp="0xREV.CORE" subtitle="Revenue Grid">
        <RevenueMetrics />
      </Panel>

      <Panel title="Revenue Forecasting Engine" stamp="0xF0RC.ENG" subtitle="Predictive Models">
        <div className="space-y-5">
          <ForecastingModels />
          <ExpansionMatrix />
        </div>
      </Panel>

      <Panel title="Revenue Composition" stamp="0xBRKDWN" subtitle="Clinic / Vendor / Category">
        <RevenueBreakdown />
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Revenue Leak Detection" stamp="0xLEAK.SCAN" subtitle="Autonomous Flags">
          <LeakDetection />
        </Panel>
        <Panel title="Financial Control Layer" stamp="0xCTRL.OPS" subtitle="Override Console">
          <ControlOverrides />
        </Panel>
      </div>

      <Panel title="Board-Level Financial View" stamp="0xBOARD" subtitle="Investor Surface">
        <BoardFinancials />
      </Panel>
    </div>
  );
}
