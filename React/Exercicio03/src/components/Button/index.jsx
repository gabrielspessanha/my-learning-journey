export default function Button({text , link}){
  return (
    <a href={link} target="_blank">
      <button style={{
      marginTop: "1rem",
      width: "8rem",
      padding: ".5rem 2rem",
      color: "white",
      marginBottom: "1rem",
      fontFamily: "sans-serif",
      backgroundColor: " rgb(0, 137, 201)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontWeight: "bold",
    }}>{text}</button>
    </a>
  )
}