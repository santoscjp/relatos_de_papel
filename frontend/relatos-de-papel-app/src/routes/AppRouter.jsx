import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from '../context/SearchContext';
import { CarritoProvider }   from '../context/CartContext';

import LandingPage     from '../pages/LandingPage';
import HomePage        from '../pages/HomePage';
import CartPage        from '../pages/CartPage';
import BookDetailPage  from '../pages/BookDetailPage';
import CheckoutPage    from '../pages/CheckoutPage';
import NotFoundPage    from '../pages/NotFoundPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/home"
          element={
            <SearchProvider>
              <HomePage />
            </SearchProvider>
          }
        />

        <Route
          path="/book/:id"
          element={
            <SearchProvider>
              <CarritoProvider>
                <BookDetailPage />
              </CarritoProvider>
            </SearchProvider>
          }
        />

        <Route
          path="/cart"
          element={
            <CarritoProvider>
              <CartPage />
            </CarritoProvider>
          }
          
        />

        <Route
          path="/checkout"
          element={
            <CarritoProvider>
              <CheckoutPage />
            </CarritoProvider>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}