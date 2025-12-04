import styled, { keyframes } from 'styled-components';

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const StatusWidget = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-tertiary);
  overflow: hidden;
`;

const scan = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const ProgressBarFill = styled.div<{ percentage: number; color: string }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: ${(props) => props.color};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: ${scan} 2s infinite linear;
  }
`;

const StatusText = styled.p`
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;


const SystemStatus = () => {
  return (
    <StatusGrid>
      <StatusWidget>
        <WidgetTitle>System Uptime</WidgetTitle>
        <StatusText style={{ color: 'var(--color-accent-green)'}}>99.999%</StatusText>
      </StatusWidget>

      <StatusWidget>
        <WidgetTitle>AI Engine Health</WidgetTitle>
        <ProgressBarContainer>
          <ProgressBarFill percentage={98} color="var(--color-accent-green)" />
        </ProgressBarContainer>
        <StatusText>Optimal</StatusText>
      </StatusWidget>

      <StatusWidget>
        <WidgetTitle>Encrypted Data Throughput</WidgetTitle>
        <ProgressBarContainer>
           <ProgressBarFill percentage={85} color="var(--color-accent-blue)" />
        </ProgressBarContainer>
        <StatusText>8.1 Gbps</StatusText>
      </StatusWidget>
    </StatusGrid>
  );
};

export default SystemStatus;
