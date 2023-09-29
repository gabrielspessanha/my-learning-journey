import { useContext, useRef, useState } from "react";
import { Content } from "./styles";
import { ItemsContext } from "../../contexts/ItemsContext";
import { useParams } from "react-router-dom";

export function Form(props){

    const { createItem, updateItem} = useContext(ItemsContext)
    const inputRef = useRef(null)

    const [name , setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    const [category , setCategory] = useState("Livro")
    const [description, setDescription] = useState("")

    const {itemId} = useParams()

    const { items } = useContext(ItemsContext)

    const item = items.find(p => p.id === +itemId)

    function getRandomId() {
        return Math.floor(Math.random() * 1000000);
      }

    function handleSubmit(event){
        event.preventDefault()
        
        const eventClick = props.eventClick

        if (eventClick === "create"){
            createItem ({
                id: getRandomId(),
                name,
                amount,
                price,
                category,
                description,
                date: new Date()
            })
        }else{
            updateItem({
                id: item.id,
                name,
                amount,
                price,
                category,
                description
            })
        }

        inputRef.current.focus()
        setName("")
        setAmount(0)
        setPrice(0)
        setCategory("")
        setDescription("")
    }


    return(
        <Content>
            { props.eventClick === "update"? <p>Atualizar Item - {`${item.name}`}</p> : <p>Novo Item</p>}
            <section onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name"
                        required
                        ref={inputRef}
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
                        <option value="Livro" >Livro</option>
                        <option value="Jogo">Jogo</option>
                        <option value="Filme">Filme</option>
                        <option value="Poster">Poster</option>
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
             
            <button onClick={handleSubmit} type="submit" className="show">Salvar</button>

            
        </Content>
    )
}