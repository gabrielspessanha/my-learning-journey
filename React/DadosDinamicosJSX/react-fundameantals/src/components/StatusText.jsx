export default ()=> {
  const status = true

  return <h2
    style={{
      color: status ? "#90ff9f" : "#f64348"
    }}
  >
    Current status: {status? "ON": "OFF"}</h2>
}