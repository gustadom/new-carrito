import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {

    const addToCart = (qty) => {
        let prod;
        qty > 1 ? prod = 'productos' : prod = 'productos';
        alert(`ingresaste ${qty} ${prod} al carrito.`);
    }
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={0} onAdd={addToCart} />
        </div>
    )
}

export default ItemListContainer
