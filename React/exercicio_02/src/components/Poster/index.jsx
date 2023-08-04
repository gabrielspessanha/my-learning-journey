import posterImg from "../../assets/imageStar.jpg"
export default function Poster(){
  return (
    <div>
      <img src={posterImg} alt='Star Wars poster'
        style={{
          width: "13rem",
          border: "10px solid black",
          boxShadow: "2px 2px 12px black"
        }}
      />
    </div>
    
  )
}
      
      

      
      
      