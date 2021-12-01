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
            <div className="ui cards">
                <div className="card">
                    <div className="image">
                        <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="image" />
                        <div className="content">
                            <div className="header">Producto</div>
                            <div className="meta">Categoria</div>
                            <div className="description">Descripcion del Producto</div>
                        </div>
                        <div className="extra content">
                            <div className="ui three buttons"></div>
                            <div className="ui basic red button" onClick={restaQty}>-</div>
                            <div className="ui basic button">{qty}</div>
                            <div className="ui basic green button" onClick={sumaQty}>+</div>
                        </div>
                    </div>
                    {
                        qty > 0 ?
                            <div className="ui basic attached button" onClick={() => onAdd(qty)}>
                                <i className="cart icon"></i>
                                Añadir al carrito
                            </div>
                            :
                            <div className="ui basic attached button disabled" onClick={() => onAdd(qty)}>
                                <i className="cart icon"></i>
                                Añadir al carrito
                            </div>
                    }
                </div >
            </div >
        </>

    )
}



export default ItemCount
