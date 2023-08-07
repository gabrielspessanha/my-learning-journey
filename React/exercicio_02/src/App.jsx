import Button from './components/Button'
import Card from './components/Card'
import poster01 from "./assets/imageStar.jpg"
import poster02 from "./assets/esb-poster.jpg"
import poster03 from "./assets/rotj-poster.jpg"

function App() {
  return (
    <>
      <Card title="Pôster Star Wars (1997)" img={poster01} />
      <Card title="Pôster: Empire Strikes Back (1980)" img={poster02} />
      <Card title="Pôster: Return of the Jedi (1983)"img={poster03} />
      <Button />
    </>
  )
}

export default App
