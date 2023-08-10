import styles from './styles.module.css';

export default function Card(props){
  return(
    <div className={styles.card}>
      <h1>Gerador de Senhas</h1>
      {props.children}
    </div>
  )
}