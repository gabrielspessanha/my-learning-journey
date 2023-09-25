import { useContext } from "react";
import { Main } from "./styles";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Link } from "react-router-dom";




export function Dashboard(){

    const { items } = useContext(ItemsContext)


    return(
        <Main>
            <h2>Deshboard</h2>
            <section className="mainDashboard">
                <div >
                    <p>Diversidade de items</p>
                    <h2></h2>
                </div>

                <div>
                    <p>Inventario total</p>
                    <h2>{items.length}</h2>
                </div>

                <div>
                    <p>Itens recentes</p>
                    <h2>00</h2>
                </div>

                <div>
                    <p>Itens acabando</p>
                    <h2>00</h2>
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
                        {items.map((item)=>(
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
                        {items.map((item)=>(
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