const Author = require("./Author");

const gabriel = new Author("gabriel");

const post = gabriel.writePost(
  "Transformes",
  "Eu Adorei os filmes achei CGI muito bem feita"
);

post.addComment("lucas", "muito bom!");
post.addComment("gabrielle", "arrasou");

console.log(gabriel);
