import { useContext } from "react";
import { Main } from "./styles";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Link } from "react-router-dom";




export function Dashboard(){

    const { items } = useContext(ItemsContext)

    const runningOutOfStock = items.filter( (item)=>{
        return item.amount <= 10
    })

    const diversifieldItem = Array.from(new Set(items.map(item => item.category)));

    const dateLimit = new Date();
    dateLimit.setDate(dateLimit.getDate()- 7);

    const recentsItems = items.filter( (item)=>{
        return item.date >= dateLimit;
    })

    return(
        <Main>
            <h2>Deshboard</h2>
            <section className="mainDashboard">
                <div >
                    <p>Diversidade de items</p>
                    <h2>{diversifieldItem.length}</h2>
                </div>

                <div>
                    <p>Inventario total</p>
                    <h2>{items.length}</h2>
                </div>

                <div>
                    <p>Itens recentes</p>
                    <h2>{recentsItems.length}</h2>
                </div>

                <div>
                    <p>Itens acabando</p>
                    <h2>{runningOutOfStock.length}</h2>
                </div>
            </section>

            <section className="tableDashboard">
                  <table>
                        <thead>
                            <tr>
                                <th>Itens Recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                     <tbody>
                        {recentsItems.length === 0 ?
                        <tr><td><p>sem items recentes</p></td></tr>
                        :recentsItems.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`items/${item.id}`} ><button className="show">ver</button></Link>
                                </td>
                                
                            </tr>
                        ))}
                        
                     </tbody>
                  </table>

                  <table>
                        <thead>
                            <tr>
                                <th>Itens acabando</th>
                                <th>Qtd.</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        

                     <tbody>
                        {runningOutOfStock.length === 0 ?
                        <tr><td><p>Não possui items acabando</p></td></tr>
                        :runningOutOfStock.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <Link to={`items/${item.id}`} ><button className="show">ver</button></Link>
                                </td>
                                
                            </tr>
                        ))}
                        
                     </tbody>

                  </table>

            </section>

        </Main>
    )
}