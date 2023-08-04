import { useState } from 'react'
import Poster from './components/Poster'
import Text from './components/Text'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Poster/>
      <Text/>
    </div>
  )
}

export default App
