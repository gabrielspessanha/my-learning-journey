class Book {
  constructor(title,pages){
    this.title = title
    this.pages = pages
    this.author= "anonimo"
    this.cover = "capa-dura"
    this.published = false
  }

  publish() {
    this.published = true
  }
}

const bookPequenoPrincipe = new Book("Pequeno Principe", 260)
const bookDiarioDeBanana = new Book("Diario de um banana", 344)

bookPequenoPrincipe.publish()

console.log(bookPequenoPrincipe,bookDiarioDeBanana)