import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [password, setpassword] = useState("");
  const [copyText, setcopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [nameChange, setNameChange] = useState("")



  
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = passwordSize;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setpassword(newPassword);
    setcopyText("Copiar")
  }
  function copyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    setcopyText("Copiado!")
  }

  return (
    <>
      <div className="App">
        <Card>
          <div>
            <label htmlFor="password">Tamanho: </label>
            <Input
              type={"number"}
              value={passwordSize}
              passwordSize={passwordSize}
              setValue={setPasswordSize}/>
          </div>
          
          <div>
            <label htmlFor="name">Seu nome: </label>
            <Input
              type="text"
              value={nameChange}
              nameChange={nameChange}
              setValue={setNameChange}
              placeholder="Digite seu nome"
              />
          </div>
          <button className="button1" onClick={generate}>
           {`Gerar senha de ${passwordSize} caracteres`} 
          </button>
          <button className="button2" onClick={copyToClipBoard}>{copyText}</button>
          <p>{password}</p>


          <div>
            <h1>{`Olá ${nameChange}`}</h1>
          </div>
        </Card>
        
      </div>
    </>
  );
}

export default App;
