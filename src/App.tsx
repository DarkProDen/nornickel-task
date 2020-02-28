import React from 'react';
import Footer from './components/Footer';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import TryTheme from './components/TryTheme';

interface IAppProps {}

const StyledApp = styled('div')`
  font-family: 'Roboto', sans-serif;
`;

const App: React.FC<IAppProps> = (props): JSX.Element => {
  return (
    // <StyledApp>
    //   <Footer />
    // </StyledApp>
    <TryTheme></TryTheme>
  );
};

export default App;
