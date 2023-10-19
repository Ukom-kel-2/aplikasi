import React from "react";
import './jual.css';
import { useNavigate } from "react-router-dom";

 
const Jual = ({setShow, size}) => {
    const navigate =useNavigate()
   return (
       <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={() => setShow(true)}>SenDer</span>
            <div className="cart" onClick={() => setShow(false)}>
                <span>
                    <i class="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
                <span>
                    <button className="logOut" onClick={()=>navigate ('/')}>LOG OUT</button>
                </span>
            </div>
        </div>
       </nav>
   )
}

export default Jual;