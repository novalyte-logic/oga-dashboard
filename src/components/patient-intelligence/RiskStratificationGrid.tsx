import styled from 'styled-components';

const Placeholder = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  margin-top: 1.5rem;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-family: var(--font-secondary);
  background-image: repeating-linear-gradient(45deg, var(--color-tertiary) 0, var(--color-tertiary) 1px, var(--color-primary) 0, var(--color-primary) 50%);
  background-size: 20px 20px;
`;

const RiskStratificationGrid = () => {
  return (
    <Placeholder>
      [RISK STRATIFICATION HEAT GRID]
    </Placeholder>
  );
};

export default RiskStratificationGrid;
