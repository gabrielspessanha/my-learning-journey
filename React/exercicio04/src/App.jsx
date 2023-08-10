import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [password, setpassword] = useState("");
  const [copyText, setcopyText] = useState("Copiar")


  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12;
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
          <button className="button1" onClick={generate}>
            Gerar
          </button>
          <button className="button2" onClick={copyToClipBoard}>{copyText}</button>
          <p>{password}</p>
        </Card>
        
      </div>
    </>
  );
}

export default App;
