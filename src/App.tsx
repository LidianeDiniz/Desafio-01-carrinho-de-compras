<<<<<<< HEAD
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
=======
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';

export function App() {

  return (
    <ThemeProvider theme = {defaultTheme}>
      <GlobalStyle />
     <BrowserRouter>
     <Router/>
     </BrowserRouter>
    </ThemeProvider>
   )
}


>>>>>>> 739814d8f47a713fb92297cfaa48e6f4f0ee0408
