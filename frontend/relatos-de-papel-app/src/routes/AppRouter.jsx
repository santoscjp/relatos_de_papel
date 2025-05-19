import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from '../context/SearchContext';
import { CarritoProvider }   from '../context/CartContext';

import LandingPage     from '../pages/LandingPage';
import HomePage        from '../pages/HomePage';
import CartPage        from '../pages/CartPage';
import BookDetailPage  from '../pages/BookDetailPage';
import CheckoutPage    from '../pages/CheckoutPage';
import NotFoundPage    from '../pages/NotFoundPage';
import OrderPage       from '../pages/OrderPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SearchProvider>
      </CarritoProvider>
    </BrowserRouter>
  );
}