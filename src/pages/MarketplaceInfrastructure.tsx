import styled from 'styled-components';

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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
  color: var(--color-accent-blue);
  margin-bottom: 1rem;
`;

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-secondary);

  &:last-child {
    border-bottom: none;
  }
`;

const MetricLabel = styled.span`
  color: var(--color-text-secondary);
`;

const MetricValue = styled.span`
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
`;

const mockCategories = [
    { name: 'Equipment', listings: 45, revenue: '$1.2M', demand: 'High' },
    { name: 'Supplements', listings: 120, revenue: '$850K', demand: 'Medium' },
    { name: 'Diagnostics', listings: 30, revenue: '$450K', demand: 'High' },
    { name: 'Digital Health', listings: 25, revenue: '$600K', demand: 'Low' },
    { name: 'Home Gym Equipment', listings: 60, revenue: '$300K', demand: 'Medium' },
    { name: 'Health Tech Devices', listings: 80, revenue: '$950K', demand: 'High' },
];

const MarketplaceInfrastructure = () => {
  return (
    <PageWrapper>
      <Header>Marketplace Infrastructure</Header>
      <CategoryGrid>
        {mockCategories.map(cat => (
          <CategoryCard key={cat.name}>
            <CategoryTitle>{cat.name}</CategoryTitle>
            <Metric>
              <MetricLabel>Active Listings</MetricLabel>
              <MetricValue>{cat.listings}</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>Revenue (YTD)</MetricLabel>
              <MetricValue>{cat.revenue}</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>Clinic Demand</MetricLabel>
              <MetricValue>{cat.demand}</MetricValue>
            </Metric>
             <Metric>
              <MetricLabel>AI Procurement Need</MetricLabel>
              <MetricValue>+15% Capacity</MetricValue>
            </Metric>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </PageWrapper>
  );
};

export default MarketplaceInfrastructure;
