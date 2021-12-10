import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail = ({ item }) => {

    const [add, setAdd] = useState(false)

    const onAdd = () => {
        setAdd(!add)

    }

    return (
        <div style={{ width: "100%", textAling: "center" }}>
            <br /> <br />
            <div className="ui cards" style={{ display: "inline-block" }}>
                <div className="card">
                    <div className="image">
                        <img src={item.pictures[0].secure_url} alt={item.title} />
                    </div>
                    <div className="content">
                        <div className="header">${item.price}</div>
                        <div className="meta">Categoria</div>
                        <div className="description">{item.title}</div>
                    </div>
                    <div className="extra content" style={{ height: "auto" }}>
                        {
                            add ?
                                <div className="meta">¡Añadido!</div>
                                :
                                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                        }
                    </div>
                    <Link to="/cart" className="ui buttom button blue">
                        Finalizar Compra
                    </Link>
                </div >
            </div >
        </div>
    )
}

export default ItemDetail
