import Profile from "../Profile"
import "./styles.css"
import avatarImg from "../../assets/avatar.jpeg"

function Card(props){
  return (
    <div className="card-main">
      <Profile avatar={avatarImg} name={"john Doe"} bio={"Full-stack javascript developer at Acme Inc"} phone={"55 11987654321"} email={"jhon.doe@email.com"} githubUrl={"#"} linkedingUrl={"#"} twitterUrl={"#"}/>
    </div>
  )
}

export default Card