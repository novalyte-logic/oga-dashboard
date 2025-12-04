import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

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

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
`;

const MetricValue = styled.p`
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ChartContainer = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  height: 400px;
`;

const chartData = [
  { month: 'Jul', revenue: 3.2, forecast: 3.2 },
  { month: 'Aug', revenue: 3.5, forecast: 3.5 },
  { month: 'Sep', revenue: 3.9, forecast: 3.9 },
  { month: 'Oct', revenue: 4.1, forecast: 4.1 },
  { month: 'Nov', revenue: 4.5, forecast: 4.5 },
  { month: 'Dec', revenue: 4.8, forecast: 4.8 },
  { month: 'Jan', forecast: 5.1 },
  { month: 'Feb', forecast: 5.3 },
  { month: 'Mar', forecast: 5.7 },
];

const RevenueForecasting = () => {
  return (
    <PageWrapper>
      <Header>Revenue & Forecasting</Header>
      <MetricGrid>
        <MetricCard>
          <MetricValue>$4.8M</MetricValue>
          <MetricLabel>MRR</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>$57.6M</MetricValue>
          <MetricLabel>ARR</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>$8,240</MetricValue>
          <MetricLabel>Patient LTV</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>+2.8x</MetricValue>
          <MetricLabel>Burn vs Growth</MetricLabel>
        </MetricCard>
      </MetricGrid>
      
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
             <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent-blue)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-accent-blue)" stopOpacity={0}/>
              </linearGradient>
               <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent-green)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-accent-green)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-tertiary)" />
            <XAxis dataKey="month" stroke="var(--color-text-secondary)" />
            <YAxis stroke="var(--color-text-secondary)" unit="M" />
            <Tooltip 
              cursor={{ fill: 'var(--color-secondary)' }}
              contentStyle={{ 
                backgroundColor: 'var(--color-primary)', 
                borderColor: 'var(--color-tertiary)',
              }}
            />
            <Area type="monotone" dataKey="revenue" name="Actual Revenue" stroke="var(--color-accent-blue)" fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="forecast" name="AI Forecast" stroke="var(--color-accent-green)" strokeDasharray="5 5" fill="url(#colorForecast)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>

    </PageWrapper>
  );
};

export default RevenueForecasting;
