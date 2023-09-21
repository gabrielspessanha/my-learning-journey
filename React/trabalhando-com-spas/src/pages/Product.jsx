import { Link } from "react-router-dom";



export default function Product(){
    return(
        <section>
            <Link to="/products">Voltar</Link>
            <h2>Nome do produto</h2>
            <p>Descrição do produto</p>
            <p>R$: 00,00</p>
        </section>
    )
}