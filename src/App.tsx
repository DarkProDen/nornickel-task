import React from 'react';
import Footer from './components/Footer';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './themes/main';

interface IAppProps {}

const App: React.FC<IAppProps> = (props): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
