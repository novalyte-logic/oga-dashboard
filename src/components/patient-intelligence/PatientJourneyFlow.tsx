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
  background-image: radial-gradient(var(--color-tertiary) 1px, transparent 1px);
  background-size: 15px 15px;
`;

const PatientJourneyFlow = () => {
  return (
    <Placeholder>
      [PATIENT JOURNEY FLOW CHART]
    </Placeholder>
  );
};

export default PatientJourneyFlow;
