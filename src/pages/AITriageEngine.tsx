import styled, { keyframes } from 'styled-components';

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

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const TriageStream = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  font-family: var(--font-secondary);
  height: 600px;
  overflow-y: scroll;
  padding: 1rem;
`;

const LogEntry = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
  
  & > span:first-child {
    color: var(--color-accent-blue);
    margin-right: 1rem;
  }
`;

const VisualizationPlaceholder = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  height: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-family: var(--font-secondary);
`;

const mockLogs = [
  "PATIENT_ID: 8A4B2C - Risk Assessment: LOW (98% confidence) -> Match: Dr. Evans",
  "PATIENT_ID: 9F3D7A - High-risk flags: Cardiovascular history -> Escalating to manual review",
  "PROTOCOL_ADJUST: Weight Loss - Patient 7C5E1B progress stall -> Adjusting dosage +2%",
  "FAILSAFE_ACTIVATED: Unusual activity detected in vendor API -> Temporarily pausing new orders from MedSupply Co.",
  "PATIENT_ID: 2B6A9D - Risk Assessment: MODERATE (85% confidence) -> Match: Dr. Chen, Flag for follow-up",
  "PATIENT_ID: 5E8F1A - Initial triage complete -> All clear -> Match: Coastal Health",
  "SYSTEM: Confidence curve for TRT protocol below threshold -> Triggering model recalibration.",
];

const AITriageEngine = () => {
  return (
    <PageWrapper>
      <Header>AI Triage Engine</Header>
      <MainLayout>
        <div>
          <h3>Live Triage Stream</h3>
          <TriageStream>
            {mockLogs.map((log, i) => (
              <LogEntry key={i}><span>[{(new Date().getTime()) + i}]</span>{log}</LogEntry>
            ))}
          </TriageStream>
        </div>
        <div>
          <h3>Visualizations</h3>
          <VisualizationPlaceholder>[RISK MODULATION GRAPH]</VisualizationPlaceholder>
          <VisualizationPlaceholder style={{marginTop: '1.5rem'}}>[CONFIDENCE CURVES]</VisualizationPlaceholder>
        </div>
      </MainLayout>
    </PageWrapper>
  );
};

export default AITriageEngine;
