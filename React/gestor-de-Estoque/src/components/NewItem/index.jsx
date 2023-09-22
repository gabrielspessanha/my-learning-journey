import { useState } from "react";
import { Content } from "./styles";



export function NewItem(){

    const [name , setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    const [category , setCategory] = useState("")
    const [description, setDescription] = useState("")

    function createNewItem(event){
        event.preventDefault()
        
        const newItem ={
            name,
            amount,
            price,
            category,
            description
        }
        console.log(newItem)

        setName("")
        setAmount(0)
        setPrice(0)
        setCategory("")
        setDescription("")
    }

    return(
        <Content>
            <section onSubmit={createNewItem}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name"
                        required 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        
                    />
                </div>
                
                <div>
                    <label htmlFor="amount">Quantidade</label>
                    <input 
                        type="number" 
                        id="amount" 
                        min={0} 
                        value={amount}
                        onChange={(e)=> setAmount(+e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="price">Preço</label>
                    <input 
                        type="number"
                        id="price" 
                        min={0}
                        value={price}
                        onChange={(e)=> setPrice(+e.target.value)} 
                />
                </div>
                
                <div>
                    <label htmlFor="category">Categoria</label>
                    <select 
                        required 
                        id="category" 
                        name="category" 
                        placeholder="Selecione uma categoria"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                    >
                        <option value="livro">Livro</option>
                        <option value="jogo">Jogo</option>
                        <option value="filme">Filme</option>
                        <option value="poster">Poster</option>
                    </select>
                </div>
            </section>

            <label htmlFor="description">Descrição</label>
             <textarea 
                name="description" 
                id="description"  
                rows="10" cols="30" 
                required
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
             
            <button onClick={createNewItem} type="submit" className="show">Salvar</button>

            
        </Content>
    )
}