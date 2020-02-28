import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Footer from './Footer';

export default props => (
  <ThemeProvider
    theme={{
      colors: {
        background: 'black',
        primary: 'tomato',
      },
      space: [0, 6, 12, 24, 48],
      fontSizes: [14, 16, 18, 20, 24],
      radii: {
        default: 12,
      },
    }}
  >
    <Footer></Footer>
  </ThemeProvider>
);
