import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div>
            <div className="ui pointig menu ">
                <div className="item">
                    <i i className="user secret icon" ></i >
                </div>
                <NavLink to="/" className="item">Inicio</NavLink>
                <NavLink to="/category/MLA1051/Celulares y Telefonos" className="item">Celulares y Telefonos</NavLink>
                <NavLink to="/category/MLA1648/Computacion" className="item">Computacion</NavLink>
                <NavLink to="/category/MLA1144/Consolas y Videojuegos" className="item">Consolas y Videojuegos</NavLink>
                <NavLink to="/" className="item">Contacto</NavLink>
                <div className="right menu">
                    <NavLink to="/" className="item">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar

