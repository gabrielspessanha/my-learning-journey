
function renderFinance(financeData) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = `card-${financeData.id}`

    const name = document.createElement('h3')
    name.textContent = financeData.name

    const value = document.createElement('p')
    value.textContent = `$${financeData.value}`

    card.append(name, value)
    document.querySelector('#finance').appendChild(card)
}

async function fetchFinance() {
    const finances = await fetch("http://localhost:3000/finance").then(res => res.json())
    finances.forEach(renderFinance)
}

document.addEventListener('DOMContentLoaded', ()=> {
    fetchFinance()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev)=>{
    ev.preventDefault()

    const financeData = {
        name: document.querySelector('#name').value,
        value: document.querySelector('#value').value
    }

    const response = await fetch('http://localhost:3000/finance', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
        },
      body: JSON.stringify(financeData)
    })

    const savedFinance = await response.json()
    form.reset()
    renderFinance(savedFinance)
})