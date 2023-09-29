import { Link } from "react-router-dom"
import { Table } from "./styles"
import { ItemsContext } from "../../contexts/ItemsContext"
import { useContext } from "react"


export function AllItems(){

    const { items, deleteItem } = useContext(ItemsContext)

    function deleteItemById(item){
      deleteItem(item)
    }

    return(
        <Table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Em Estoque</th>
                <th>Categoria</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {items.map((item)=>(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.amount} unid</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`${item.id}`} ><button className="show">ver</button></Link>
                    <Link to={`/items/${item.id}/update`}><button className="update">Atualizar</button></Link> 
                    <button onClick={() => deleteItemById(item)} className="delete">Excluir</button>

                  </td> 

                </tr> 
              ))}
                
            </tbody>
       </Table>
    )
}