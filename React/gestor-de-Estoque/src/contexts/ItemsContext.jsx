import { createContext, useState } from "react";


export const ItemsContext = createContext({})


export function ItemsProvider({children}){
    const [items, setItems] = useState(()=>{
        const storedItems = localStorage.getItem("items")
        if(!storedItems) return []
        const items = JSON.parse(storedItems)

        return items
    })

    function createItem(itemInput){
        const existingItemId = items.findIndex((item) => item.name === itemInput.name)

        if (existingItemId !== -1){
            alert("Já existe um item com esse nome!")
        } else{
            const updatedItems = [...items, itemInput ]
            setItems(updatedItems)
            localStorage.setItem("items", JSON.stringify(updatedItems) )
            alert("Item adicionado")
        }
    }

    function updateItem(itemInput){
        const indexItem = items.findIndex((item)=> item.id === itemInput.id)
        
        const item = items[indexItem]
        const itemUpdate ={
            ...item,
            name: itemInput.name === ""? item.name: itemInput.name,
            amount: itemInput.amount === 0 ? item.amount: itemInput.amount,
            price: itemInput.price === 0 ? item.price: itemInput.price,
            category: itemInput.category === ""? "Livro": itemInput.category,
            description: itemInput.description === ""? item.description: itemInput.description,
        }
        const itemsUpdated = [...items]
        itemsUpdated[indexItem] = itemUpdate

        setItems(itemsUpdated);
        alert("Item atualizado!")
    }

    function deleteItem(itemInput){
        const indexItem = items.findIndex( (item) => item.id === itemInput.id)
        const item = items[indexItem]

        if(confirm(`tem certeza que deseja excluir o item ${item.name} ?`)){
            const updatedItems = [...items]
            updatedItems.splice(indexItem, 1)
            setItems(updatedItems)
            alert(`item ${item.name} foi removido`)
        }
        
        
    }

    function formaterDateToBrasil(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      }


    return(
        <ItemsContext.Provider value={{items, createItem, updateItem, deleteItem, formaterDateToBrasil}}>
            {children}
        </ItemsContext.Provider>
    )

}