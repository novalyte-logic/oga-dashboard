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
    content: '/// SYSTEM CONTROL';
    color: var(--color-accent-red);
    margin-right: 0.75rem;
    font-weight: 700;
  }
`;

const ControlGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ControlWidget = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  border-left: 5px solid var(--color-accent-red);
`;

const WidgetTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: var(--color-secondary);
  border: 1px solid var(--color-tertiary);
  color: var(--color-text-primary);
  padding: 0.5rem 1rem;
  font-family: var(--font-primary);
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-accent-red);
    color: var(--color-background);
  }
`;

const Select = styled.select`
    background-color: var(--color-secondary);
    border: 1px solid var(--color-tertiary);
    color: var(--color-text-primary);
    padding: 0.5rem;
    font-family: var(--font-primary);
    width: 100%;
`;


const ControlPanel = () => {
  return (
    <PageWrapper>
      <Header>Control Panel</Header>
      <ControlGrid>
        <ControlWidget>
          <WidgetTitle>AI Triage Engine Kill Switch</WidgetTitle>
          <Button>DEACTIVATE</Button>
        </ControlWidget>
        <ControlWidget>
          <WidgetTitle>Marketplace Kill Switch</WidgetTitle>
          <Button>DEACTIVATE</Button>
        </ControlWidget>
        <ControlWidget>
          <WidgetTitle>AI Model Version</WidgetTitle>
          <Select>
            <option>NovaNet-v3.2 (Stable)</option>
            <option>NovaNet-v3.3 (Beta)</option>
            <option>NovaNet-v3.1 (Legacy)</option>
          </Select>
        </ControlWidget>
        <ControlWidget>
          <WidgetTitle>System-Wide Traffic</WidgetTitle>
           <Select>
            <option>100% (Normal)</option>
            <option>50% Throttled</option>
            <option>10% (Emergency)</option>
          </Select>
        </ControlWidget>
         <ControlWidget>
          <WidgetTitle>Data Access Restrictions</WidgetTitle>
          <Select>
            <option>Level 0 (Normal)</option>
            <option>Level 1 (Ops Read-Only)</option>
            <option>Level 2 (Admin Only)</option>
          </Select>
        </ControlWidget>
         <ControlWidget>
          <WidgetTitle>EMERGENCY ISOLATION</WidgetTitle>
          <Button style={{backgroundColor: 'var(--color-accent-red)', color: 'white'}}>ENGAGE</Button>
        </ControlWidget>
      </ControlGrid>
    </PageWrapper>
  );
};

export default ControlPanel;
