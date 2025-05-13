import React from 'react';
import './App.css';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ProductSlider from './components/ProductSlider/ProductSlider';
import NavBarApp from './components/Navbar/Navbar';
import { ContextoBusquedaProvider } from './context/ContextoBusqueda';


function App() {
  return (
    <>
    <ContextoBusquedaProvider>
      <NavBarApp/>
      <HeroCarousel />
      <ProductSlider/>
      </ContextoBusquedaProvider>
    </>
  );
}

export default App;