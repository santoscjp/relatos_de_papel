import React from 'react';
import './App.css';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ProductSlider from './components/ProductSlider/ProductSlider';
import NavBarApp from './components/Navbar/Navbar';
import { ContextoBusquedaProvider } from './context/ContextoBusqueda';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={
          <ContextoBusquedaProvider>
            <NavBarApp />
            <HeroCarousel />
            <ProductSlider />
          </ContextoBusquedaProvider>
        } />
        {/* <Route path="/producto/:id" element={Producto} /> */}
      </Routes>
  );
}

export default App;