import styled from 'styled-components';
import WorldHeatmap from '../components/gods-eye/WorldHeatmap';
import SystemStatus from '../components/gods-eye/SystemStatus';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const MetricCard = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-accent-blue);
    opacity: 0.6;
  }
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

const GodsEyeOverview = () => {
  return (
    <PageWrapper>
      <Header>God's Eye Overview</Header>
      <Grid>
        <MetricCard>
          <MetricValue>1,892,345</MetricValue>
          <MetricLabel>Global Patient Demand</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>4,211</MetricValue>
          <MetricLabel>Clinics Online</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>34,887</MetricValue>
          <MetricLabel>AI Matches Executed Today</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>$1.2M</MetricValue>
          <MetricLabel>Marketplace Transactions Today</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue style={{ color: 'var(--color-accent-red)' }}>
            8
          </MetricValue>
          <MetricLabel>Active Risk Flags</MetricLabel>
        </MetricCard>
         <MetricCard>
          <MetricValue>98.7 TB/s</MetricValue>
          <MetricLabel>Data Ingestion Rate</MetricLabel>
        </MetricCard>
      </Grid>
      <SystemStatus />
      <WorldHeatmap />
    </PageWrapper>
  );
};

export default GodsEyeOverview;
