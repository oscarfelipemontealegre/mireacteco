import React from "react";
import '../NavBar/NavBar.css';
import Cartwidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


export const NavBar=() => {
    return (
    
        <div className="cointerner">
            <nav className="nav">
                <ul className="nav_list">
                    <li>
                        <NavLink className="fa-solid fa-user-astronaut"  to="/">tuamigofiel</NavLink>
                    </li>
                    <br/>

                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/dormir">dormir</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/comer">comer</NavLink>
                    </li>
                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/calle">calle</NavLink>
                    </li>

                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/">login</NavLink>
                    </li>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="buscar"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>

                    </form>

                    <li>
                        <NavLink className="fa-solid fa-shop"  to="Cart"><Cartwidget/></NavLink>
                    </li>

                </ul>
            </nav>
        </div>       
    );
}

export default NavBar;