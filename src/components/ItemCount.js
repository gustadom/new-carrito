import React, { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [qty, setQty] = useState(initial);

    const sumaQty = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }

    const restaQty = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    return (
        <>

            <div className="ui three buttons" style={{ marginBottom: 10 }}>
                <div className="ui basic red button" onClick={restaQty}>-</div>
                <div className="ui basic button">{qty}</div>
                <div className="ui basic green button" onClick={sumaQty}>+</div>
            </div>
            {
                qty > 0 ?
                    <div className="ui buttom attached button" onClick={() => onAdd()} >
                        <i className="cart icon"></i>
                        Añadir al carrito
                    </div>
                    :
                    <div className="ui buttom attached button disabled">
                        <i className="cart icon"></i>
                        Añadir al carrito
                    </div>
            }
        </>

    )
}



export default ItemCount
