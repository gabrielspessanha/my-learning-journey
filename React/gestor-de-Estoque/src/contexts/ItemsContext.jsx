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
        console.log(items)
    }


    return(
        <ItemsContext.Provider value={{items, setItems, createItem}}>
            {children}
        </ItemsContext.Provider>
    )

}