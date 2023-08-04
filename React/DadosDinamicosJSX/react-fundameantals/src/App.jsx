
import StatusText from "./components/StatusText"
import Title from "./components/Title"
import { Subtitle } from "./components/Subtitle"

import styles from "./App.module.css"


export default function App() {
  const stats = true

  return (
      <div className={stats? styles.appOn:styles.appOff}>
        <Title/>
        <Subtitle/>
        <StatusText />
      </div>
  )
}
