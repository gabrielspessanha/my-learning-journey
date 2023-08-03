
export default function App() {
  const tech = 'React'
  const status = true
  return (
      <div>
        <h1>{tech} is Awesome</h1>
        <h2>it's easy, like 1 + 1 is {true}</h2>
        <h2>Current status: {status? "ON": "OFF"}</h2>
      </div>
  )
}
