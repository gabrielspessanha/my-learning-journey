import { Content } from "./styles";



export function NewItem(){
    return(
        <Content>
            <section>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" />
                </div>
                
                <div>
                    <label htmlFor="amount">Quantidade</label>
                    <input type="number" id="amount" min={0} />
                </div>
                
                <div>
                    <label htmlFor="price">Preço</label>
                    <input type="number" min={0} />
                </div>
                
                <div>
                    <label htmlFor="category">Categoria</label>
                    <select id="category" name="category" placeholder="Selecione uma categoria">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </section>

            <label htmlFor="description">Descrição</label>
             <textarea name="description" id="description"  rows="10" cols="30" />
             
            <button type="submit">Salvar</button>

            
        </Content>
    )
}