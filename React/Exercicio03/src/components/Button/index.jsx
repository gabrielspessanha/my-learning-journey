
import styles from "./styles.module.css"

export default function Button({text , link}){
  return (
    <a href={link} target="_blank">
      <button className={styles.wrapper}
      >{text}
      </button>
    </a>
  )
}