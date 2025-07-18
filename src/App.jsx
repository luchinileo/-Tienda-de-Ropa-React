import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 1, name: 'Remera lisa', price: 5000, image: '/img/remera-lisa.jpg' },
  { id: 2, name: 'Remera estampada', price: 5500, image: '/img/remera-estampada.jpg' },
  { id: 3, name: 'Zapatilla urbana', price: 20000, image: '/img/zapatillas-urbana.jpg' },
  { id: 4, name: 'Remera oversize', price: 6000, image: '/img/remera-oversize.jpg' },
  { id: 5, name: 'Zapatilla de gimnasio', price: 18000, image: '/img/zapatilla-deportiva.jpg' },
  { id: 6, name: 'Buzo ', price: 12000, image: '/img/buzo.jpg' },
  { id: 7, name: 'Campera de verano', price: 15000, image: '/img/campera-verano.jpg.jpg' },
  { id: 8, name: 'Pantalón jean', price: 11000, image: '/img/jean.jpg' },
  { id: 9, name: 'Pantalón deportivo', price: 9000, image: '/img/pantalon-deportivo.jpg' },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} toggleCart={toggleCart} />

      <div className="container my-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

      <Cart
        cartItems={cartItems}
        clearCart={clearCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        showCart={showCart}
        toggleCart={toggleCart}
      />
    </>
  );
}

export default App;
