import './App.css';
import Layout from './components/Layout';
import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Store from './pages/Store';
import Custom from './pages/Custom';
import { useState } from 'react';

function App() {

  const loadCart = () => {
    //if carro doesnt exist in local storage, create it like []
    if (localStorage.getItem('carro') === null) {
      return [];
    }
    else {
      let carro = JSON.parse(localStorage.getItem('carro'));
      return carro;
    }
  }
  //make cart with loadCart
  const [cart, setCart] = useState(loadCart());
  localStorage.setItem('carro', JSON.stringify(cart));
  const [showCart, setShowCart] = useState(false);



  const saveCart = () => {
    localStorage.setItem('carro', JSON.stringify(cart));
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const limpirarCarrito = () => {
    setCart([]);
    saveCart();
  }

  const eliminarItem = (id) => {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== id) {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
    saveCart();
  }

  const addToCart = (order) => {
    let cartIndex = cart.findIndex(item => (
      item.id === order.id &&
      item.tamanio === order.tamanio &&
      item.nombre === order.nombre));
    let item = cart[cartIndex];
    if (item) {
      item.cantidad += order.cantidad;
      item.precio += order.precio;
      setCart(cart);
    } else {
      setCart([...cart, order]);
    }
    //saveCart();
    saveCart();
  };

  const addToCartBebidaYSalsa = (order) => {
    let cartIndex = cart.findIndex(item => (
      item.id === order.id &&
      item.nombre === order.nombre));
    let item = cart[cartIndex];
    if (item) {
      item.cantidad += order.cantidad;
      item.precio += order.precio;
      setCart(cart);
    } else {
      setCart([...cart, order]);
    }
    //saveCart();
    saveCart();
  }

  const addToCartPersonalizada = (order) => {
    setCart([...cart, order]);
    saveCart();
  };

  return (
    <Layout
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
      cleanCart={limpirarCarrito}
      deleteItem={eliminarItem}
      loadCart={loadCart}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/store" element={<Store addToCart={addToCart} addToCartByS={addToCartBebidaYSalsa}/>} exact />
          <Route path="/custom" element={<Custom cart={cart} addToCartP={addToCartPersonalizada}/>} exact />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
