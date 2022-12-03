import React from "react";
import '../NavBar/NavBar.css';
import Cartwidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


export const NavBar=() => {
    return (
    
        <div className="cointerner">
            <nav className="nav">
                <ul className="nav_list justify-content-between">
                    <li>
                        <NavLink className="fa-solid fa-user-astronaut"  to="/">TuAmigoFiel</NavLink>
                    </li>
                    <br/>

                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/dormir">Dormir</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/comer">Comer</NavLink>
                    </li>
                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/categorias/calle">Calle</NavLink>
                    </li>

                    <li>
                        <NavLink className=" fa-solid fa-magnifying-glass"  to="/">Login</NavLink>
                    </li>

                    <form className="d-flex my-2 my-lg-0" role="search">
                        <input className="form-control mr-me-2" type="search" placeholder="buscar"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>

                    </form>

                    <li>
                        <NavLink className="fa-solid fa-shop end"  to="Cart"><Cartwidget/></NavLink>
                    </li>

                </ul>
            </nav>
        </div>       
    );
}

export default NavBar;