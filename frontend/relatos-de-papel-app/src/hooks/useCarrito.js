import { useContext } from 'react';
import { CarritoContext } from '../context/CartContext';

const useCarrito = () => useContext(CarritoContext);

export default useCarrito;
