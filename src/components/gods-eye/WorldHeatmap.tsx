import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 174, 239, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 174, 239, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 174, 239, 0);
  }
`;

const MapContainer = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  margin-top: 1.5rem;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-family: var(--font-secondary);
  background-image: radial-gradient(var(--color-tertiary) 1px, transparent 1px);
  background-size: 15px 15px;
  position: relative;
`;

const PlaceholderText = styled.p`
  z-index: 1;
`;

const PulseDot = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-accent-blue);
  width: 15px;
  height: 15px;
  box-shadow: 0 0 0 0 rgba(0, 174, 239, 1);
  animation: ${pulse} 2s infinite;
`;

const WorldHeatmap = () => {
  return (
    <MapContainer>
      <PlaceholderText>[WORLD HEATMAP OF DEMAND]</PlaceholderText>
      <PulseDot style={{ top: '40%', left: '20%' }} />
      <PulseDot style={{ top: '50%', left: '55%', animationDelay: '0.5s' }} />
      <PulseDot style={{ top: '65%', left: '80%', animationDelay: '1s' }} />
    </MapContainer>
  );
};

export default WorldHeatmap;
