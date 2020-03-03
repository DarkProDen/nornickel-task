import React, { SFC } from 'react';
import Footer from './components/Footer';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';
import LogInForm from './components/LogInForm';
import { Flex } from 'rebass';
import ProtectedPage from './components/ProtectedPage';
import checkToken from './misc/checkToken';

interface IAppProps {}

const App: SFC<IAppProps> = (props): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Flex flexDirection="column" alignItems="center" sx={{ fontFamily: 'default' }}>
        {checkToken() ? <ProtectedPage /> : <LogInForm />}
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
