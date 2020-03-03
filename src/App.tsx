import React, { SFC } from 'react';
import Footer from './components/Footer';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';
import LogInForm from './components/LogInForm';
import { Flex } from 'rebass';
import ProtectedPage from './components/ProtectedPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

interface IAppProps {}

const App: SFC<IAppProps> = (props): JSX.Element => (
  <Router>
    <ThemeProvider theme={mainTheme}>
      <Flex flexDirection="column" alignItems="center" sx={{ fontFamily: 'default' }}>
        <Switch>
          <PrivateRoute path="/Protected">
            <ProtectedPage />
          </PrivateRoute>
          <Route path="">
            <LogInForm />
          </Route>
        </Switch>
        <Footer />
      </Flex>
    </ThemeProvider>
  </Router>
);

export default App;
