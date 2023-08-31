let finances = [
]
/* ---------- */

function createCard(id){
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = `card-${id}`
    return card
}
function createTitle(name){
    const title = document.createElement('h3')
    title.textContent = name
    return name
}

function createAmount(amount){
    const value = document.createElement('p')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedAmount = formater.format(amount)

    if (amount > 0){
        value.textContent = `${formatedAmount} C`
        value.classList.add('credit')
    } else{
        value.textContent = `${formatedAmount} D`
        value.classList.add('debit')
    }

    return value
    
}

function createEditButton(finance){
    const btnEdit = document.createElement('button')
   btnEdit.textContent = 'Edit'
   btnEdit.type = 'button'
   btnEdit.classList.add('buttonEdit')
   btnEdit.addEventListener('click', ()=>{
    document.querySelector('#id').value = finance.id
    document.querySelector('#name').value = finance.name
    document.querySelector('#value').value = finance.amount
   })

   return btnEdit
}

function createDelButton(id){
    const buttonDel = document.createElement('button')
    buttonDel.textContent = 'Del'
    buttonDel.classList.add('buttonDelete')
    buttonDel.addEventListener('click', async () =>{
        await fetch(`http://localhost:3000/finance/${id}`, {method: 'DELETE'})
        buttonDel.parentElement.parentElement.remove()
        const indexRemove = finances.findIndex( (f) => f.id === id)
        finances.splice(indexRemove, 1)
        updateBalance()
    })
    return buttonDel
}

function createSection(sectionClass,financeData ){
    const amount = createAmount(financeData.amount)
    const btnDelete = createDelButton(financeData.id)
    const btnEdit = createEditButton(financeData)

    const section = document.createElement('section')
    section.classList.add(sectionClass)

    section.append(amount, btnEdit, btnDelete)
    return section
}


function renderFinance(financeData) {
    const card = createCard(financeData.id)
    const title = createTitle(financeData.name)
    const section = createSection('section',financeData)
    
    
    card.append(title,section)
    document.querySelector('#finance').appendChild(card)
}



async function fetchFinance() {
    return await fetch("http://localhost:3000/finance").then(res => res.json())
    
}

function updateBalance(){
    const balanceSpan = document.querySelector('#balance')
    const balance = finances.reduce((sum, finance)=> sum + finance.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}

async function setup(){
    form.reset()
    const results = await fetchFinance()
    finances.push(...results)
    finances.forEach(renderFinance)
    console.log(finances)
    updateBalance()
}

const form = document.querySelector('form')

form.addEventListener('submit', async (ev)=>{
    ev.preventDefault()


    const id = document.querySelector('#id').value
    const financeData = {
        name: document.querySelector('#name').value,
        amount: parseFloat(document.querySelector('#value').value)
    }

    if (id){
        const response = await fetch(`http://localhost:3000/finance/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(financeData)
        })

        const updatedFinance = await response.json()
        const indexRemove = finances.findIndex((f)=> f.id === id)

        finances.splice(indexRemove, 1, updatedFinance)
        document.querySelector(`#card-${id}`).remove()
        renderFinance(updatedFinance)
    }else{
        //criar nova transação 
      const response = await fetch('http://localhost:3000/finance', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
        },
      body: JSON.stringify(financeData)
        })

        const savedFinance = await response.json()
        form.reset()
        finances.push(savedFinance)
        renderFinance(savedFinance)
    }
        
    

    updateBalance()
})


document.addEventListener('DOMContentLoaded',setup)
