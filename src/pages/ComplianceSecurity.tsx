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
  color: var(--color-accent-red);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);

  &::before {
    content: '[CLASSIFIED] ///';
    color: var(--color-accent-red);
    margin-right: 0.75rem;
    font-weight: 700;
  }
`;

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatusWidget = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  text-align: center;
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const WidgetValue = styled.p`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent-green);
`;

const LogTerminal = styled.div`
  background-color: #000;
  border: 1px solid var(--color-accent-red);
  font-family: var(--font-secondary);
  height: 400px;
  overflow-y: scroll;
  padding: 1rem;
  color: var(--color-accent-green);
`;

const LogEntry = styled.div`
  font-size: 0.9rem;
  white-space: pre;
`;

const ComplianceSecurity = () => {
  return (
    <PageWrapper>
      <Header>Compliance & Security</Header>
      <StatusGrid>
        <StatusWidget>
          <WidgetTitle>Security Posture</WidgetTitle>
          <WidgetValue>ACTIVE</WidgetValue>
        </StatusWidget>
        <StatusWidget>
          <WidgetTitle>Zero-Trust Verification</WidgetTitle>
          <WidgetValue>ENABLED</WidgetValue>
        </StatusWidget>
        <StatusWidget>
          <WidgetTitle>Intrusion Detection</WidgetTitle>
          <WidgetValue>MONITORING</WidgetValue>
        </StatusWidget>
      </StatusGrid>
      
      <LogTerminal>
        <LogEntry>>>> Access Audit Trail - Last 10 Entries</LogEntry>
        <LogEntry>>>> -------------------------------------</LogEntry>
        <LogEntry>[{new Date().toISOString()}] ADMIN_j.doe - VIEW - /compliance-security</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - READ - patient_db:8A4B2C</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - READ - patient_db:9F3D7A</LogEntry>
        <LogEntry>[{new Date().toISOString()}] COMPLIANCE_a.smith - EXPORT - hipaa_log_2025-12-04</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - WRITE - protocol_db:7C5E1B</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - FLAG - vendor_api:MedSupply Co.</LogEntry>
        <LogEntry>[{new Date().toISOString()}] OPS_t.jones - VIEW - /clinic-performance</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - READ - patient_db:2B6A9D</LogEntry>
        <LogEntry>[{new Date().toISOString()}] ADMIN_j.doe - VIEW - /system-logs</LogEntry>
        <LogEntry>[{new Date().toISOString()}] AI_SYSTEM - READ - patient_db:5E8F1A</LogEntry>
      </LogTerminal>

    </PageWrapper>
  );
};

export default ComplianceSecurity;
