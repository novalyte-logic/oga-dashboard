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
`;

const AIReasoningNodes = () => {
  return (
    <Placeholder>
      [AI REASONING NODES]
    </Placeholder>
  );
};

export default AIReasoningNodes;
