import React, { SFC } from 'react';
import Footer from './components/Footer';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';
import LogInForm from './components/LogInForm';
import { Flex, Heading } from 'rebass';
import Cookies from 'js-cookie';

interface IAppProps {}

const App: SFC<IAppProps> = (props): JSX.Element => {
  const accessToken = Cookies.get('access-token');

  return (
    // <Router>
    <ThemeProvider theme={mainTheme}>
      <Flex flexDirection="column" alignItems="center" sx={{ fontFamily: 'default' }}>
        {(() => {
          if (accessToken) {
            return <Heading my={30}>Аутентификация прошла успешно</Heading>;
          } else {
            return <LogInForm />;
          }
        })()}
        {/* <Route path="/login">
            <LogInForm />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute> */}
        <Footer />
      </Flex>
    </ThemeProvider>
    //  </Router>
  );
};

export default App;
