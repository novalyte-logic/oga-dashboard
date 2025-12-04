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

const ClinicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-tertiary);
  border: 1px solid var(--color-tertiary);
`;

const ClinicRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  background-color: var(--color-primary);
  padding: 1rem 1.5rem;
  align-items: center;

  &:nth-child(odd) {
    background-color: #111;
  }
`;

const HeaderRow = styled(ClinicRow)`
  background-color: var(--color-secondary);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  padding: 0.75rem 1.5rem;
`;

const ClinicName = styled.span`
  font-weight: 700;
`;

const mockClinics = [
  { name: 'Novalyte HQ - Austin', revenue: '$450,120', conversion: '88%', satisfaction: '95%', grade: 'A+' },
  { name: 'Evergreen Wellness - Denver', revenue: '$310,800', conversion: '75%', satisfaction: '92%', grade: 'A-' },
  { name: 'Coastal Health - Miami', revenue: '$250,550', conversion: '68%', satisfaction: '88%', grade: 'B+' },
  { name: 'Phoenix Regenerative - AZ', revenue: '$220,300', conversion: '65%', satisfaction: '90%', grade: 'B+' },
  { name: 'Metropolis Health - NYC', revenue: '$510,000', conversion: '85%', satisfaction: '91%', grade: 'A' },
];

const ClinicPerformance = () => {
  return (
    <PageWrapper>
      <Header>Clinic Performance</Header>
      <ClinicList>
        <HeaderRow>
          <span>Clinic</span>
          <span>Revenue/Mo</span>
          <span>Lead Conversion</span>
          <span>Satisfaction</span>
          <span>AI Grade</span>
        </HeaderRow>
        {mockClinics.map(clinic => (
          <ClinicRow key={clinic.name}>
            <ClinicName>{clinic.name}</ClinicName>
            <span>{clinic.revenue}</span>
            <span>{clinic.conversion}</span>
            <span>{clinic.satisfaction}</span>
            <span>{clinic.grade}</span>
          </ClinicRow>
        ))}
      </ClinicList>
    </PageWrapper>
  );
};

export default ClinicPerformance;
