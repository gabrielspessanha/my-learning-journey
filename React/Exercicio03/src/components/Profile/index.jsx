import Button from "../Button";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import './styles.css';


export default function Profile({avatar, name, bio, email, phone, githubUrl, twitterUrl, linkedingUrl}){
  return (
    <div className="Profile-card">
      <img src={avatar} alt={name} />
      <Title>
        <span>{name}</span>
      </Title>
      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>+{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <Button link={githubUrl} text="GitHub" />
      <Button link={linkedingUrl} text="Linkedin" />
      <Button link={twitterUrl} text="Twitter" />
    </div>
  )
}