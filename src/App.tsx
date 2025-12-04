import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import GodsEyeOverview from './pages/GodsEyeOverview';
import PatientIntelligence from './pages/PatientIntelligence';
import ClinicPerformance from './pages/ClinicPerformance';
import MarketplaceInfrastructure from './pages/MarketplaceInfrastructure';
import VendorSupplyGrid from './pages/VendorSupplyGrid';
import AITriageEngine from './pages/AITriageEngine';
import ComplianceSecurity from './pages/ComplianceSecurity';
import RevenueForecasting from './pages/RevenueForecasting';
import SystemLogs from './pages/SystemLogs';
import ControlPanel from './pages/ControlPanel';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<GodsEyeOverview />} />
            <Route path="/patient-intelligence" element={<PatientIntelligence />} />
            <Route path="/clinic-performance" element={<ClinicPerformance />} />
            <Route path="/marketplace-infrastructure" element={<MarketplaceInfrastructure />} />
            <Route path="/vendor-supply-grid" element={<VendorSupplyGrid />} />
            <Route path="/ai-triage-engine" element={<AITriageEngine />} />
            <Route path="/compliance-security" element={<ComplianceSecurity />} />
            <Route path="/revenue-forecasting" element={<RevenueForecasting />} />
            <Route path="/system-logs" element={<SystemLogs />} />
            <Route path="/control-panel" element={<ControlPanel />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
