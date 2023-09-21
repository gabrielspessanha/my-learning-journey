import { Link } from "react-router-dom";

import './style.css';

export function Header(){
    return(
        <nav className="navbar">
            <h2>REACT STOCK</h2>
            <div className="linksDashboard">
                <p>inicio</p>
                <p>items</p>
            </div>
        </nav>
    )
}