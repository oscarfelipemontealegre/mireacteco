import React from "react";
import '../NavBar/NavBar.css';
import Cartwidget from "../CartWidget/CartWidget";



export const NavBar=() => {
    return (
    
        <div className="cointerner">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="/">mi negocio</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="fa-solid fa-user-astronaut"  href="/">categorias</a>
                    </li>
                    <br/>

                    <li>
                        <a className=" fa-solid fa-magnifying-glass"  href="/">productos vip</a>
                    </li>
                    
                    <li>
                        <a className=" fa-solid fa-magnifying-glass"  href="/">faqs</a>
                    </li>

                    <li>
                        <a className=" fa-solid fa-magnifying-glass"  href="/">login</a>
                    </li>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="buscar"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>

                    </form>

                    <li>
                        <a className="fa-solid fa-shop"  href="/"><Cartwidget/></a>
                    </li>

                </ul>
            </nav>
        </div>       
    );
}

export default NavBar;