import Button from "../Button";
import './styles.css';


export default function Profile({avatar, name, bio, email, phone, githubUrl, twitterUrl, linkedingUrl}){
  return (
    <div className="Profile-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <p>+{phone}</p>
      <p>{email}</p>
      <Button link={githubUrl} text="GitHub" />
      <Button link={linkedingUrl} text="Linkedin" />
      <Button link={twitterUrl} text="Twitter" />
    </div>
  )
}