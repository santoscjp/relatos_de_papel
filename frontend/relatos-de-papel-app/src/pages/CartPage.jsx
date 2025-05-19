import useCarrito from '../hooks/useCarrito';

const CartPage = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

  return (
    <div>
      <h4>Carrito ({carrito.length})</h4>
      <ul>
        {carrito.map((item) => (
          <li key={item.uuid}>
            {item.titulo} (x{item.cantidad}){' '}
            <button onClick={() => quitarDelCarrito(item.uuid)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
export default CartPage;
