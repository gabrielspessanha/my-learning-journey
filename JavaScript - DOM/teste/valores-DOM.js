function register(element){
  const name = element.children.username.value
  const pass = element.children.password.value
  const pass2 = element.children.passwordConfirmation.value

  console.log({name,pass,pass2})

  if (pass === pass2){
    alert(`Usuario: ${name} registrado!` )
  }else{
    alert("As senhas não conferem")
  }
}