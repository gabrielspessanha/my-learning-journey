import { Link, useParams } from "react-router-dom";
import { Content } from "./styles";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";



export function Item(){
    const {itemId} = useParams()

    const { items,formaterDateToBrasil  } = useContext(ItemsContext)

    const item = items.find(p => p.id === +itemId)

    if(!item){
        return <h2 style={{margin: "2rem"}}>Ops...Esse produto não foi encontrado</h2>
    }

    return(
        <Content>
            <div className="buttons">
                <p>{item.name}</p>
                <Link to={`/items/${item.id}/update`} ><button className="update">Atualizar</button></Link>       
                <button className="delete">Excluir</button>
            </div>

            <div className="cards">
                <p>Categoria: {item.category}</p>
                <p>Quantidade em estoque: {item.amount}</p>
                <p>Preço: 
                    {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    }).format(item.price)}
                </p>
            </div>
            <p>Descrição: {item.description}</p>
            <p>Data: {formaterDateToBrasil(item.date)}
            </p>
        </Content>
    )
}