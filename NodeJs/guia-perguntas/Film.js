class Film{
  constructor(name, synopsis, year, generer, actors, duraction){
    this.name = name
    this.synopsis = synopsis
    this.year = year
    this.generer = generer
    this.actors = actors
    this.duraction = duraction
  }
  play(){
    console.log(`Filme ${this.name} de ${this.actors} possui duração de ${this.duraction}`)
  }
}


const film = new Film(
  "O menino e a garça",
  "Um garoto entra em um mundo de fantasia",
  2024,
  "ação, drama, isekai",
  ["Hayao Myasaki","Ghibli"],
  "120 minutos"
)

console.log(film)
film.play()