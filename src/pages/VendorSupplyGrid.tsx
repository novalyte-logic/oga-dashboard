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

const VendorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-tertiary);
  border: 1px solid var(--color-tertiary);
`;

const VendorRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  background-color: var(--color-primary);
  padding: 1rem 1.5rem;
  align-items: center;

  &:nth-child(odd) {
    background-color: #111;
  }
`;

const HeaderRow = styled(VendorRow)`
  background-color: var(--color-secondary);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  padding: 0.75rem 1.5rem;
`;

const VendorName = styled.span`
  font-weight: 700;
`;

const mockVendors = [
  { name: 'MedSupply Co.', reliability: '99.8%', speed: '24h', qa_failures: '0.1%', trust: 'High' },
  { name: 'PharmaGen', reliability: '98.5%', speed: '36h', qa_failures: '0.5%', trust: 'Medium' },
  { name: 'EquipWell', reliability: '99.2%', speed: '48h', qa_failures: '0.2%', trust: 'High' },
  { name: 'Diagnostic Inc.', reliability: '95.0%', speed: '72h', qa_failures: '2.1%', trust: 'Low' },
  { name: 'VitaSource', reliability: '99.9%', speed: '24h', qa_failures: '0.05%', trust: 'High' },
];

const VendorSupplyGrid = () => {
  return (
    <PageWrapper>
      <Header>Vendor Supply Grid</Header>
      <VendorList>
        <HeaderRow>
          <span>Vendor</span>
          <span>Reliability</span>
          <span>Avg. Fulfillment</span>
          <span>QA Failures</span>
          <span>Trust Index</span>
        </HeaderRow>
        {mockVendors.map(vendor => (
          <VendorRow key={vendor.name}>
            <VendorName>{vendor.name}</VendorName>
            <span style={{ color: 'var(--color-accent-green)'}}>{vendor.reliability}</span>
            <span>{vendor.speed}</span>
            <span style={{ color: vendor.qa_failures.startsWith('0') ? 'inherit' : 'var(--color-accent-red)'}}>{vendor.qa_failures}</span>
            <span style={{ color: vendor.trust === 'High' ? 'var(--color-accent-green)' : (vendor.trust === 'Medium' ? '#FFA500' : 'var(--color-accent-red)')}}>{vendor.trust}</span>
          </VendorRow>
        ))}
      </VendorList>
    </PageWrapper>
  );
};

export default VendorSupplyGrid;
