import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div>
            <div className="ui secondary menu ">
                <a className="active item">Mr-Beer</a>
                <a className="item">Home</a>
                <a className="item">Productos</a>
                <a className="item">Contacto</a>
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

