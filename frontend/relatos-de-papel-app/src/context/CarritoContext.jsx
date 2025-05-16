import { createContext, useContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (libro) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.uuid === libro.uuid);
      if (existente) {
        return prev.map((item) =>
          item.uuid === libro.uuid ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...libro, cantidad: 1 }];
      }
    });
  };

  const quitarDelCarrito = (uuid) => {
    setCarrito((prev) => prev.filter((item) => item.uuid !== uuid));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};