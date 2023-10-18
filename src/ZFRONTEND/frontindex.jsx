import React, { useState, useEffect } from "react";
import Jual from './Jual/Jual';
import Barang from './Barang/barang';
import Cart from './Cart/cart';
import './frontindex.css';

const Front = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
 
  return (
    <React.Fragment>
      <Jual setShow={setShow} size={cart.length} />
      <h1>Selamat Datang & Selamat Berbelanja!</h1>
      {show ? (
        <Barang handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} 
    </React.Fragment>
  )
}

export default Front;