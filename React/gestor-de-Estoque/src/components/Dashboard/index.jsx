import { useContext } from "react";
import { Main } from "./styles";
import { ItemsContext } from "../../contexts/ItemsContext";




export function Dashboard(){

    const { items } = useContext(ItemsContext)


    return(
        <Main>
            <h2>Deshboard</h2>
            <section className="mainDashboard">
                <div >
                    <p>Diversidade de items</p>
                    <h2>0</h2>
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
                        <tr>
                            <td>7 wonders</td>
                            <td><button>Ver</button></td>
                        </tr>
                        <tr>
                            <td>O senhor do aneis</td>
                            <td><button>Ver</button></td>
                        </tr>
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
                        <tr>
                            <td>7 wonders</td>
                            <td>8</td>
                            <td><button>Ver</button></td>
                        </tr>
                        <tr>
                            <td>O senhor dos aneis</td>
                            <td>17</td>
                            <td><button>Ver</button></td>
                        </tr>
                        
                     </tbody>

                  </table>

            </section>

        </Main>
    )
}