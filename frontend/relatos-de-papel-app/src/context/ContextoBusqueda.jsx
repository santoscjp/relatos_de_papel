import React, { createContext, useState } from 'react';

export const ContextoBusqueda = createContext();

export const ContextoBusquedaProvider = ({ children }) => {
  const [cadenaFiltro, setCadenaFiltro] = useState('');

  return (
    <ContextoBusqueda.Provider value={{ cadenaFiltro, setCadenaFiltro }}>
      {children}
    </ContextoBusqueda.Provider>
  );
}