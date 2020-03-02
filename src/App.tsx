import React from 'react';
import Footer from './components/Footer';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';
import LogInForm from './components/LogInForm';
import { Flex } from 'rebass';

interface IAppProps {}

const App: React.FC<IAppProps> = (props): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Flex flexDirection="column" alignItems="center" sx={{ fontFamily: 'default' }}>
        <LogInForm />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
