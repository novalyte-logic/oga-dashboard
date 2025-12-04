import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppWrapper>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </AppWrapper>
  );
};

export default Layout;
