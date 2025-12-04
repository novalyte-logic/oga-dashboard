import styled from 'styled-components';

const WidgetContainer = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ClusterList = styled.ul`
  list-style: none;
`;

const ClusterItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-tertiary);

  &:last-child {
    border-bottom: none;
  }
`;

const ClusterName = styled.span`
  color: var(--color-text-primary);
`;

const ClusterCount = styled.span`
  font-family: var(--font-secondary);
  color: var(--color-accent-blue);
`;

const data = [
  { name: 'TRT', count: 850 },
  { name: 'Weight Loss', count: 420 },
  { name: 'Peptides', count: 310 },
  { name: 'Recovery', count: 205 },
  { name: 'Mental', count: 150 },
];

const ConditionClusters = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Condition Clusters</WidgetTitle>
      <ClusterList>
        {data.map(cluster => (
          <ClusterItem key={cluster.name}>
            <ClusterName>{cluster.name}</ClusterName>
            <ClusterCount>{cluster.count}</ClusterCount>
          </ClusterItem>
        ))}
      </ClusterList>
    </WidgetContainer>
  );
};

export default ConditionClusters;
