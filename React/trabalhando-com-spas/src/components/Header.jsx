import { Link } from "react-router-dom";



export function Header(){
    return (
        <header>
         <nav style={{display: "flex",gap: "2rem"}}>
            <Link to="/">Inicio</Link>
            <Link to="/product">Produtos</Link>
            <Link to="/cart">Carrinho</Link>
                    
         </nav>
        </header>
    )
}