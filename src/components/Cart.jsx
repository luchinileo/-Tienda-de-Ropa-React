function Cart({ cartItems, clearCart, increaseQuantity, decreaseQuantity, showCart, toggleCart }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${showCart ? 'show' : ''}`}>
      <div className="cart-header">
        <h2>🛒 Carrito</h2>
        <button className="btn-close" onClick={toggleCart}></button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-muted">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} <span className="text-muted">x{item.quantity}</span>
                </div>
                <div>
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button className="btn btn-sm btn-secondary me-3" onClick={() => increaseQuantity(item.id)}>+</button>
                  ${item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>

          <h5>Total: ${total}</h5>

          <button className="btn btn-success mt-2 me-2" onClick={() => {
              alert('¡Gracias por tu compra! Nos pondremos en contacto.');
              clearCart();
              toggleCart();
          }}>
            Finalizar compra
          </button>

          <button className="btn btn-danger mt-2" onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default Cart;
