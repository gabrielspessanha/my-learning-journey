import { createContext, useState } from "react";


export const ItemsContext = createContext({})


export function ItemsProvider({children}){
    const [items, setItems] = useState([])

    function createItem(itemInput){
        const existingItemId = items.findIndex((item) => item.name === itemInput.name)

        if (existingItemId !== -1){
            alert("Já existe um item com esse nome!")
        } else{
            setItems([...items, itemInput ])
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
        const result = alert("olá")
        const itemsUpdated = [...items]
        itemsUpdated[indexItem] = itemUpdate

        setItems(itemsUpdated);
    }

    function deleteItem(itemInput){
        const indexItem = items.findIndex( (item) => item.id === itemInput.id)

        const item = items[indexItem]
        const updatedItems = [...items]
        updatedItems.splice(indexItem, 1)
        setItems(updatedItems)
        console.log(`item ${item.name} foi removido`)
        
    }

    function formaterDateToBrasil(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      }


    return(
        <ItemsContext.Provider value={{items, setItems, createItem, updateItem, deleteItem, formaterDateToBrasil}}>
            {children}
        </ItemsContext.Provider>
    )

}