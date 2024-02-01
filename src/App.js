// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AppContext from './lib/app-context';
import Header from './components/header';
import Footer from './components/footer';
import PageContainer from './components/page-container';
import NotFound from './pages/not-found';
import Home from './pages/home';
import Catalog from './pages/catalog';
import ProductDetails from './pages/products';
import Basket from './pages/basket';
import StripeCheckout from './pages/stripe';
import ConfirmationPage from './pages/confirmation-page';
import AboutMe from './pages/about-me';
import ProtectedRoute from './pages/protected-route';

export default function App() {
  const [cartId, setCartId] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem('basketToken');
    const cartId = token ? jwtDecode(token) : null;
    setCartId(cartId);
  }, []);

  const addToBasket = result => {
    const { cartId, token } = result;
    window.localStorage.setItem('basketToken', token);
    setCartId(cartId);
  };

  const checkOut = () => {
    window.localStorage.removeItem('basketToken');
    setCartId('');
  };

  const contextValue = { cartId, addToBasket, checkOut };
  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/hospice' element={<Hospice />} />
        {/* <Route path='cookies/:cookieId' element={<ProductDetails />} /> */}
        <Route path='/home-health' element={<HomeHealth />} />
        <Route path='/inquiry' element={<Inquiry />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}