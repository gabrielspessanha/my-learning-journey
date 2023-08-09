import { useState } from "react";
import Button from "../Button";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from './styles.module.css';

export default function Profile(props){
  const [followText, setFollowText] = useState("follow")
  const [unfollowColor, setFollowColor] = useState(styles.unfollowButton)

  function handleClick(ev){
    alert("Agora vc está seguindo!")
    setFollowText("following")
    setFollowColor(styles.followButton)


    
  }

  return (
    <div className={styles.ProfileCard}>
      <img src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button
          className={unfollowColor}
          onClick={handleClick}
        >
          {followText}</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>+{props.phone}</ProfileSection>
      <ProfileSection
        className={styles.wrapper}
      >{props.email}</ProfileSection>
      <Button link={props.githubUrl} text="GitHub" />
      <Button link={props.linkedingUrl} text="Linkedin" />
      <Button link={props.twitterUrl} text="Twitter" />
    </div>
  )
}