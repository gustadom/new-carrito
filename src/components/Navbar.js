import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div>
            <div className="ui secondary menu ">
                <a href="." className="active item">Mr-Beer</a>
                <a href="." className="item">Home</a>
                <a href="." className="item">Productos</a>
                <a href="." className="item">Contacto</a>
                <div className="right menu">
                    <a href="." className="item">
                        <CartWidget />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

