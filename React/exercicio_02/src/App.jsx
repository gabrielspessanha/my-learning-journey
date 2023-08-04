import { useState } from 'react'
import styles from "./App.module.css"
import Button from "./components/Button"

function App() {
  return (
    <div className={styles.container}>
      <div>
        <img src="../public/imageStar.jpg" 
          style={{
            width: "13rem",
            border: "10px solid black",
            boxShadow: "2px 2px 12px black"
          }}
        />
      </div>
      <div>
        <h1>Pôster: Star Wars (1977)</h1>

        <p
        style={{
          paddingBottom: "1rem"
        }}
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta esse ea eos et placeat aperiam, numquam ad nam voluptatum nisi dolores rem. Rerum sapiente at a officia odio ipsum perferendis.</p>
        <Button />
      </div>
    </div>
  )
}

export default App
