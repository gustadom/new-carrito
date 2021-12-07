import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div>
            <div className="ui pointig menu ">
                <div>
                    <i className="user secret icon"></i>
                </div>
                <NavLink to="/" className="item">Inicio</NavLink>
                <NavLink to="/category/MLA1051" className="item">Celulares y Telefonos</NavLink>
                <NavLink to="/category/MLA1648" className="item">Computacion</NavLink>
                <NavLink to="/category/MLA1144" className="item">Consolas y Videojuegos</NavLink>
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



// const Navbar = () => {
//     return (
//         <div>
//             <div className="ui pointing menu ">
//                 <NavLink to="/" activeClassName="active" className="item">Mr-Beer</NavLink>
//                 <NavLink to="/" activeClassName="active" className="item">Home</NavLink>
//                 <NavLink to="/category/Cervezas" activeClassName="active" className="item">Cervezas</NavLink>
//                 <NavLink to="/category/Destacados" activeClassName="active" className="item">Destacados</NavLink>
//                 <NavLink activeClassName="active" className="item">Contacto</NavLink>
//                 <div className="right menu">
//                     <NavLink to="/" activeClassName="active" className="item">
//                         <CartWidget />
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }