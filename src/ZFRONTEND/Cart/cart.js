import React, { useState, useEffect } from "react";
import './cart.css';
import Form from "../Form/form";
import Text from "../TextArea/text";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        hanldePrice();
    }

    const hanldePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    }

    useEffect(() => {
        hanldePrice();
    })

    return (
        <article>
            <Form/>
            {cart.map((item) => (
                <div className="cartBox" key={item.id}>
                    <div className="cartImg">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Hapus</button>
                    </div>
                </div>
            ))}
            <Text/>
            <div className="total">
                <span>Total Harga</span>
                <span>Rp. {price}</span>
                <button className="co">Checkout</button>
            </div>
        </article>
    )
}

export default Cart;