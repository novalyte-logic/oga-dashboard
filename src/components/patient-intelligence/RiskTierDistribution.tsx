import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const WidgetContainer = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-tertiary);
  padding: 1.5rem;
  margin-top: 1.5rem;
  height: 300px;
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const data = [
  { name: 'Low', count: 1240, fill: 'var(--color-accent-green)' },
  { name: 'Moderate', count: 680, fill: '#FFA500' },
  { name: 'High', count: 210, fill: 'var(--color-accent-red)' },
];

const RiskTierDistribution = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Risk Tier Distribution</WidgetTitle>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={_ => "var(--color-tertiary)"} />
          <XAxis dataKey="name" stroke={_ => "var(--color-text-secondary)"} />
          <YAxis stroke={_ => "var(--color-text-secondary)"} />
          <Tooltip 
            cursor={{ fill: 'var(--color-secondary)' }}
            contentStyle={{ 
              backgroundColor: 'var(--color-primary)', 
              borderColor: 'var(--color-tertiary)',
              color: 'var(--color-text-primary)'
            }}
          />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </WidgetContainer>
  );
};

export default RiskTierDistribution;
