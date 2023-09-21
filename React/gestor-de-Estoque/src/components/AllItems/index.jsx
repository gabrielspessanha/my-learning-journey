import { Table } from "./styles"


export function AllItems(){
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
               <tr>
                  <td>ld2896731b31kj3</td>
                  <td>7 Wonders</td>
                  <td>8 unid</td>
                  <td>Jogos</td>
                  <td>
                    <button className="show">ver</button>
                    <button className="update">Atualizar</button>
                    <button className="delete">Excluir</button>
                 </td>
                  
               </tr>
               <tr>
                 <td>ld289527890196j3</td>  
                 <td>O senhor do aneis</td>
                 <td>32 unid.</td>
                 <td>Livros</td>
                 <td>
                   <button className="show">ver</button>
                   <button className="update">Atualizar</button>
                   <button className="delete">Excluir</button>
                 </td>
               </tr>
                  
            </tbody>
       </Table>
    )
}