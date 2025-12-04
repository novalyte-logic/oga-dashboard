import Panel from '@/components/common/Panel';
import LiveMetrics from '@/components/ai-monitoring/LiveMetrics';
import InferenceLogs from '@/components/ai-monitoring/InferenceLogs';
import ReasoningTokens from '@/components/ai-monitoring/ReasoningTokens';
import ConfidenceDistribution from '@/components/ai-monitoring/ConfidenceDistribution';
import LatencyMonitor from '@/components/ai-monitoring/LatencyMonitor';
import SafetyTriggers from '@/components/ai-monitoring/SafetyTriggers';
import DriftWarnings from '@/components/ai-monitoring/DriftWarnings';
import DataFreshness from '@/components/ai-monitoring/DataFreshness';
import PredictionVolatility from '@/components/ai-monitoring/PredictionVolatility';
import DecisionTree from '@/components/ai-monitoring/DecisionTree';
import ExplainabilityDetail from '@/components/ai-monitoring/ExplainabilityDetail';
import SuperadminControls from '@/components/ai-monitoring/SuperadminControls';
import ModelHealthSuite from '@/components/ai-monitoring/ModelHealthSuite';
import SafetyOverrides from '@/components/ai-monitoring/SafetyOverrides';
import RiskModulationGraph from '@/components/ai-monitoring/RiskModulationGraph';

const aiSystems = [
  'Men’s Health Symptom Classifier',
  'Hormone Risk Engine',
  'Provider Matching AI',
  'Marketplace ROI AI',
  'Vendor Demand Prediction',
  'Abuse / anomaly detection',
  'Forecasting neural stack',
  'Drift guardian health checks',
];

export default function AITriageEnginePage() {
  return (
    <div className="space-y-6">
      <Panel title="Men’s Health Superadmin Flight Deck" stamp="0xMH-COMMAND" subtitle="Single Operator">
        <p className="text-sm text-white/70">
          This deck is the single pane for the nationwide men’s health intelligence lattice. One Superadmin owns every
          decision, from hormone risk overrides to abuse detection. No RBAC. No approvals. Every token of reasoning is
          streamed and every fail-safe is wired directly to your console.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {aiSystems.map((system) => (
            <div key={system} className="border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/70">
              {system}
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Core Systems Telemetry" stamp="0xC0RE.RT" subtitle="Live Metrics">
        <LiveMetrics />
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Real-Time Inference Logs" stamp="0xLOG.STREAM" subtitle="Symptom Classifier + Hormone Risk">
          <InferenceLogs />
        </Panel>
        <Panel title="Token-Level Reasoning Chain" stamp="0xTOKEN.MESH" subtitle="Sequence Attention Weights">
          <ReasoningTokens />
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Confidence Distributions" stamp="0xCONF.CRV" subtitle="Classifier vs Provider">
          <ConfidenceDistribution />
        </Panel>
        <Panel title="Model Latency & Safety" stamp="0xLAT.SAFE" subtitle="Latency Charts + Safety Triggers">
          <div className="space-y-4">
            <LatencyMonitor />
            <SafetyTriggers />
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Drift Warnings & Data Freshness" stamp="0xDRIFT.DATA" subtitle="Guardian Signals">
          <div className="grid gap-4 md:grid-cols-2">
            <DriftWarnings />
            <DataFreshness />
          </div>
        </Panel>
        <Panel title="Prediction Volatility" stamp="0xVOL.NEURAL" subtitle="Forecasting Variance">
          <PredictionVolatility />
        </Panel>
      </div>

      <Panel title="Explainability Layer" stamp="0xXP-LAB" subtitle="Reasoning Tree + Why This Decision">
        <div className="space-y-6">
          <DecisionTree />
          <ExplainabilityDetail />
        </div>
      </Panel>

      <Panel title="Superadmin Controls" stamp="0xSUPR.CTRL" subtitle="Direct Flight Commands">
        <SuperadminControls />
      </Panel>

      <Panel title="Model Health Dashboard" stamp="0xHLTH.GRD" subtitle="Drift, Bias, Validation">
        <ModelHealthSuite />
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Safety Override Feed" stamp="0xSAFE.GATE" subtitle="Fail-safe Executions">
          <SafetyOverrides />
        </Panel>
        <Panel title="Marketplace ROI Waveform" stamp="0xROI.RISK" subtitle="Risk / ROI Simulation">
          <RiskModulationGraph />
        </Panel>
      </div>
    </div>
  );
}
