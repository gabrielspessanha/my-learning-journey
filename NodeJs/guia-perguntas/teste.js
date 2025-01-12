function getId(){
  return new Promise((resolve,reject)=>{
    resolve(11)
  })
}

function findEmail(id){
  return new Promise((resolve,reject)=>{
    if(id === 11) resolve("gabriel@gmail.com")
    else reject("Email não encontrado! tente outro ID")
  })
}

function sendEmailById(id, email){
  setTimeout(()=>{
    return new Promise((resolve, reject)=>{
      console.log(`---------------------\nEmail: ${email}\nEnviado para o id: ${id}\n---------------------`)
      resolve()
    })
  },3000)
}

function sayHello(){
  return "Hello, World!!"
}

async function menu(){
  const id = await getId()

  const email = await findEmail(id)

  sendEmailById(id, email)

  console.log(sayHello())
}

menu()