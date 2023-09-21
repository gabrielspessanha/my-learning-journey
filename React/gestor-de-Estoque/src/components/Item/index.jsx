import { Content } from "./styles";



export function Item(){
    return(
        <Content>
            <div className="buttons">
                <p>Nome do item</p>
                <button className="update">Atualizar</button>
                <button className="delete">Excluir</button>
            </div>

            <div className="cards">
                <p>Categoria: *****</p>
                <p>Quantidade em estoque: **</p>
                <p>Preço: R$ *****</p>
            </div>
            <p>Descrição: ***********</p>
            <p>Cadastrado em: ------------------</p>
        </Content>
    )
}