import styled, { keyframes } from 'styled-components';

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);

  &::before {
    content: '/// LIVE DATA STREAM';
    color: var(--color-accent-blue);
    margin-right: 0.75rem;
    font-weight: 700;
  }
`;

const Terminal = styled.div`
  flex-grow: 1;
  background-color: #000;
  border: 1px solid var(--color-tertiary);
  font-family: var(--font-secondary);
  overflow-y: scroll;
  padding: 1rem;
  color: var(--color-text-primary);
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const LogLine = styled.div<{ color?: string }>`
  font-size: 0.9rem;
  white-space: pre;
  color: ${props => props.color || 'inherit'};
  
  &::before {
    content: '>> ';
  }
`;

const Cursor = styled.span`
  background: var(--color-accent-green);
  animation: ${blink} 1s step-end infinite;
`;

const mockLogs = [
  { type: 'AI_EVENT', msg: 'Model recalibration complete. Accuracy: 99.2%', color: 'var(--color-accent-blue)' },
  { type: 'PATIENT_MATCH', msg: 'ID: 2B6A9D -> Dr. Chen (Confidence: 85%)' },
  { type: 'CLINIC_TX', msg: 'ID: coastal-health - New Subscription: $5,000' },
  { type: 'SECURITY_EVENT', msg: 'Failed login attempt: user \'admin\' from IP 123.45.67.89', color: 'var(--color-accent-red)' },
  { type: 'VENDOR_API', msg: 'MedSupply Co. - Order #789A1B Confirmed' },
  { type: 'PATIENT_MATCH', msg: 'ID: 8A4B2C -> Dr. Evans (Confidence: 98%)' },
  { type: 'CLINIC_TX', msg: 'ID: novalyte-hq - Revenue: $12,345' },
  { type: 'AI_EVENT', msg: 'Risk assessment for patient 9F3D7A requires manual review.' },
];

const SystemLogs = () => {
  return (
    <PageWrapper>
      <Header />
      <Terminal>
        {mockLogs.map((log, i) => (
          <LogLine key={i} color={log.color}>
            <span style={{color: 'var(--color-text-secondary)'}}>[{log.type}]</span> {log.msg}
          </LogLine>
        ))}
        <LogLine><Cursor>&nbsp;</Cursor></LogLine>
      </Terminal>
    </PageWrapper>
  );
};

export default SystemLogs;
