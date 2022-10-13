import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player, cart, setCart }) => {
    console.log(player);
    const { strPlayer, idPlayer, strCutout } = player;

    const handleAddToCart = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price: 155,
        };
        if (cart) {
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }


    };

    console.log(cart);
    return (
        <div className='card' data-aos="flip-left">

            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'>details</button>
            <button className='card-btn' onClick={handleAddToCart}>Add to card</button>
            <button className='card-btn'>Bookmark</button>

        </div>
    );
};

export default SinglePlayer;