interface User{
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
}

interface Repo{
  name:string
  description: string
  fork: boolean
  stargazers_count: number
}

const users: User[] = []

async function getUserGithub(nameRepo: string){
  try {
    const response = await fetch(`https://api.github.com/users/${nameRepo}`);
    
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    
    const data = await response.json();

    const user: User = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio,
      public_repos: data.public_repos,
      repos_url: data.repos_url
    };

    users.push(user);
    alert('Usuário cadastrado!');
  } catch (error) {
    console.error(error);
  }
}

function showAllUsers(){
  users.forEach( (user) => {
    console.table(user)
  })
}
async function showInfoUser(name: string) {
  const user:User | undefined = users.find( u => u.login === name)

  if(!user){
    alert("Usuario não encontrado!")
    return
  }
  const result = await resolvePromisse(user)
  console.log(result)
}

async function resolvePromisse(user: User){
  
  const response = await fetch(user.repos_url)

  if(!response.ok){
    throw new Error("Error na requisição!")
  }
  const data: Repo[] = await response.json()
  const repoFiltered = data.map( (repo: Repo) =>{
    return {
      name: repo.name,
      description: repo.description,
      fork: repo.fork,
      stargazers: repo.stargazers_count
    }
  })
  return repoFiltered
}

async function getReposLength(user: User){
  let count = 0

  const response = await fetch(user.repos_url)

  const data = await response.json()

  count += data.length

  return count
}

async function countReposAllUsers() {
  const promises = users.map(user => getReposLength(user));

  try {
    const results = await Promise.all(promises);
    const count = results.reduce((acc, numRepos) => acc + numRepos, 0);
    alert(`A soma do repositórios de todos os usuários é: ${count}`);
  } catch (error) {
    console.error(error);
  }
}

async function showTopFiveUsers(){
  const usersCopy = users.slice(0);

  const topFive = usersCopy.sort( (a,b)=>{
    return  +getReposLength(a) -   +getReposLength(b)
  })
  topFive.splice(5)
  topFive.forEach( user => {
    console.table(user)
  })
}


function Menu(){
  let userOption = 0;

  while (userOption !== 6) {
    const menu = `Painel Principal
      1 - Pegar novo usuário 
      2 - Mostrar todos os usuários
      3 - Mostrar as informações de um usuário
      4 - Exibir tamanho de todos os repositorios
      5 - Mostrar top 5 usuarios
      6 - Sair
    `

    userOption = parseInt(prompt(menu))

    switch (userOption) {
      case 1:
        const nameGithub = prompt("Digite nome do usuario no github")
        getUserGithub(nameGithub)
        break
      case 2:
        showAllUsers()
        break
      case 3:
        const name= prompt("Digite nome do usuario no github")
        showInfoUser(name)
        break
      case 4:
        countReposAllUsers()
        break
      case 5:
        showTopFiveUsers()
        break
      case 6:
        alert('Encerrando o sistema...')
        break
      default:
        alert('Opção inválida! Retornando ao painel principal...')
        break;
    }
  }
}

Menu()