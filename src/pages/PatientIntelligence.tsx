import styled from 'styled-components';
import RiskTierDistribution from '../components/patient-intelligence/RiskTierDistribution';
import ConditionClusters from '../components/patient-intelligence/ConditionClusters';
import PatientJourneyFlow from '../components/patient-intelligence/PatientJourneyFlow';
import RiskStratificationGrid from '../components/patient-intelligence/RiskStratificationGrid';
import AIReasoningNodes from '../components/patient-intelligence/AIReasoningNodes';

const PageWrapper = styled.div`
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  &::before {
    content: '///';
    color: var(--color-accent-blue);
    margin-right: 0.75rem;
    font-weight: 700;
  }
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const MetricCard = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
`;

const MetricValue = styled.p`
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MainLayout = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div``;
const RightColumn = styled.div``;

const PatientIntelligence = () => {
  return (
    <PageWrapper>
      <Header>Patient Intelligence</Header>
      <TopGrid>
        <MetricCard>
          <MetricValue>482</MetricValue>
          <MetricLabel>Live Assessments</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>18m 22s</MetricValue>
          <MetricLabel>Avg. Time to Match</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>12%</MetricValue>
          <MetricLabel>Intake Drop-off</MetricLabel>
        </MetricCard>
      </TopGrid>
      
      <MainLayout>
        <LeftColumn>
          <PatientJourneyFlow />
          <RiskStratificationGrid />
        </LeftColumn>
        <RightColumn>
          <RiskTierDistribution />
          <ConditionClusters />
          <AIReasoningNodes />
        </RightColumn>
      </MainLayout>

    </PageWrapper>
  );
};

export default PatientIntelligence;
