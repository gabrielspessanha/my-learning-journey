import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [password, setpassword] = useState("");
  const [copyText, setcopyText] = useState("Copiar")

  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)



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
            <label htmlFor="showInput">Customizar tamanho: </label>
            <input
              type="checkbox"
              id="showInput"
              value={showInput}
              onChange={()=> setShowInput(currentState => !currentState)}
             />
             
          </div>

          {showInput ? 
            <div>
            <label htmlFor="password">Tamanho: </label>
            <Input
              setPaswordSize={setPasswordSize}
              passwordSize={passwordSize}/>
          </div>: null
        }

          

          <button className="button1" onClick={generate}> Gerar senha de {showInput ? passwordSize : 8} caracteres
          </button>
          <button className="button2" onClick={copyToClipBoard}>{copyText}</button>
          <p>{password}</p>
        </Card>
        
      </div>
    </>
  );
}

export default App;
