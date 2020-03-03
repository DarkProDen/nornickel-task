import React, { SFC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';
import { Flex } from 'rebass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LogInForm from './components/LogInForm';
import ProtectedPage from './components/ProtectedPage';
import Footer from './components/Footer';

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
