import React from "react";

const Cards = ({item, handleClick}) => {
    const {id, title, price, img} = item;
    return (
        <div className="cards">
            <div className="imageBox">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>Rp. {price}</p>
                <button onClick={() => handleClick(item)}>Masukkan Keranjang</button>
            </div>
        </div>
    )
}

export default Cards;