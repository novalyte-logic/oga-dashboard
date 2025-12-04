import Panel from '@/components/common/Panel';
import GlobalAdsMetrics from '@/components/ads-intel/GlobalAdsMetrics';
import DataSchemaCard from '@/components/ads-intel/DataSchemaCard';
import EventPipeline from '@/components/ads-intel/EventPipeline';
import GoogleAdsPanel from '@/components/ads-intel/GoogleAdsPanel';
import TikTokPanel from '@/components/ads-intel/TikTokPanel';
import MetaPanel from '@/components/ads-intel/MetaPanel';
import FunnelAttribution from '@/components/ads-intel/FunnelAttribution';
import FunnelReconstruction from '@/components/ads-intel/FunnelReconstruction';
import AttributionModels from '@/components/ads-intel/AttributionModels';
import AttributionComparison from '@/components/ads-intel/AttributionComparison';
import FinancialOutputs from '@/components/ads-intel/FinancialOutputs';
import AIInsights from '@/components/ads-intel/AIInsights';
import GeminiAttribution from '@/components/ads-intel/GeminiAttribution';
import AlertsPanel from '@/components/ads-intel/AlertsPanel';
import AdsSuperadminControls from '@/components/ads-intel/AdsSuperadminControls';
import RevenueVisuals from '@/components/ads-intel/RevenueVisuals';
import BoardTrafficViews from '@/components/ads-intel/BoardTrafficViews';
import AutoScalingEngine from '@/components/ads-intel/AutoScalingEngine';
import ScalingSignals from '@/components/ads-intel/ScalingSignals';
import RiskControls from '@/components/ads-intel/RiskControls';
import GeminiBudgetForecast from '@/components/ads-intel/GeminiBudgetForecast';
import BudgetOverrideForm from '@/components/ads-intel/BudgetOverrideForm';
import FatigueSignals from '@/components/ads-intel/FatigueSignals';
import FatigueClassification from '@/components/ads-intel/FatigueClassification';
import PlatformFatigueLogic from '@/components/ads-intel/PlatformFatigueLogic';
import FatigueAutoActions from '@/components/ads-intel/FatigueAutoActions';
import GeminiFatigueAnalysis from '@/components/ads-intel/GeminiFatigueAnalysis';
import CreativeWarRoom from '@/components/ads-intel/CreativeWarRoom';
import AutopilotModes from '@/components/ads-intel/AutopilotModes';
import AutopilotFlow from '@/components/ads-intel/AutopilotFlow';
import AutopilotActions from '@/components/ads-intel/AutopilotActions';
import GeminiAutopilot from '@/components/ads-intel/GeminiAutopilot';
import AutopilotChangeLog from '@/components/ads-intel/AutopilotChangeLog';

export default function ControlPanelPage() {
  return (
    <div className="space-y-6">
      <Panel title="Ads Tracking & Traffic Intelligence" stamp="0xADS.CMD" subtitle="Unified Schema">
        <p className="text-sm text-white/70">
          Superadmin-only terminal for paid traffic. Google, TikTok, and Meta streams are normalized every 35s,
          cached, and stamped. This surface shows where traffic originates, the cost, the conversions, and the waste in
          real time. No RBAC. No guardrails. Just tactical control.
        </p>
        <div className="mt-4 space-y-4">
          <DataSchemaCard />
          <EventPipeline />
        </div>
      </Panel>

      <Panel title="Global Ads Metrics" stamp="0xADS.GLOBAL" subtitle="Live Telemetry">
        <GlobalAdsMetrics />
      </Panel>

      <Panel title="Ads Profit Autopilot" stamp="0xAUTOPILOT" subtitle="Unified Capital Deployment Brain">
        <div className="space-y-4">
          <AutopilotFlow />
          <AutopilotModes />
          <AutopilotActions />
          <GeminiAutopilot />
        </div>
      </Panel>

      <Panel title="AI Budget Auto-Scaling Engine" stamp="0xAUTO.SCALE" subtitle="Capital Allocation AI">
        <div className="space-y-4">
          <AutoScalingEngine />
          <ScalingSignals />
        </div>
      </Panel>

      <Panel title="Creative Fatigue Detection" stamp="0xFATIGUE" subtitle="Kill fatigue before ROAS dies">
        <div className="space-y-4">
          <FatigueSignals />
          <FatigueClassification />
          <PlatformFatigueLogic />
          <FatigueAutoActions />
          <GeminiFatigueAnalysis />
          <CreativeWarRoom />
        </div>
      </Panel>

      <Panel title="Platform Intelligence" stamp="0xPLAT.INTEL" subtitle="Google / TikTok / Meta">
        <div className="grid gap-6 xl:grid-cols-3">
          <GoogleAdsPanel />
          <TikTokPanel />
          <MetaPanel />
        </div>
      </Panel>

      <Panel title="Attribution Models" stamp="0xATTR.MODEL" subtitle="Money Truth Engine">
        <div className="space-y-4">
          <AttributionModels />
          <AttributionComparison />
        </div>
      </Panel>

      <Panel title="Conversion & Funnel Attribution" stamp="0xFUNNEL" subtitle="Lead Flow & Leaks">
        <div className="space-y-4">
          <FunnelAttribution />
          <FunnelReconstruction />
        </div>
      </Panel>

      <Panel title="Financial Outputs" stamp="0xFIN.OUT" subtitle="Campaign Profitability">
        <FinancialOutputs />
      </Panel>

      <Panel title="Risk Control Layer" stamp="0xRISK.ADS" subtitle="Drawdowns & Stop-loss">
        <RiskControls />
      </Panel>

      <Panel title="AI Analysis Layer // Gemini" stamp="0xGEM.ANALYSIS" subtitle="Clinical Narratives">
        <div className="space-y-4">
          <AIInsights />
          <GeminiAttribution />
        </div>
      </Panel>

      <Panel title="Gemini Predictive Budgeting" stamp="0xGEMI.BUD" subtitle="24h / 72h Forward View">
        <GeminiBudgetForecast />
      </Panel>

      <Panel title="Alerting & Anomaly Detection" stamp="0xALRT.WAR" subtitle="Financial Risk Index">
        <AlertsPanel />
      </Panel>

      <Panel title="Superadmin Controls" stamp="0xSUP.ADS" subtitle="Kill Switches & Overrides">
        <AdsSuperadminControls />
      </Panel>

      <Panel title="Budget Overrides Log" stamp="0xBUD.OVR" subtitle="Manual Changes">
        <BudgetOverrideForm />
      </Panel>

      <Panel title="Autopilot Change Log" stamp="0xAUT.LOG" subtitle="AI Decisions + Risks">
        <AutopilotChangeLog />
      </Panel>

      <Panel title="Visual Command Center" stamp="0xVIS.ADS" subtitle="Revenue Trees & ROI Ladders">
        <RevenueVisuals />
      </Panel>

      <Panel title="Board-Level Traffic Views" stamp="0xBOARD.ADS" subtitle="Spend vs Revenue / ROI">
        <BoardTrafficViews />
      </Panel>
    </div>
  );
}
