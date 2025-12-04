import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 280px;
  background-color: var(--color-primary);
  border-right: 1px solid var(--color-tertiary);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  border-left: 3px solid transparent;
  transition: all 0.2s ease-in-out;

  &.active {
    color: var(--color-text-primary);
    background-color: var(--color-secondary);
    border-left: 3px solid var(--color-accent-blue);
  }
`;

const NAV_ITEMS = [
  { to: '/', label: '1. GOD’S EYE OVERVIEW' },
  { to: '/patient-intelligence', label: '2. PATIENT INTELLIGENCE' },
  { to: '/clinic-performance', label: '3. CLINIC PERFORMANCE' },
  { to: '/marketplace-infrastructure', label: '4. MARKETPLACE INFRASTRUCTURE' },
  { to: '/vendor-supply-grid', label: '5. VENDOR SUPPLY GRID' },
  { to: '/ai-triage-engine', label: '6. AI TRIAGE ENGINE' },
  { to: '/compliance-security', label: '7. COMPLIANCE & SECURITY' },
  { to: '/revenue-forecasting', label: '8. REVENUE & FORECASTING' },
  { to: '/system-logs', label: '9. SYSTEM LOGS' },
  { to: '/control-panel', label: '10. CONTROL PANEL' },
];

const Sidebar = () => {
  return (
    <NavContainer>
      <Logo>NOVALYTE AI</Logo>
      <NavList>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label}>
            <StyledNavLink to={item.to}>
              {item.label}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Sidebar;
