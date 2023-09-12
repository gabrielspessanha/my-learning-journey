
import { useState } from 'react';
import './styles/global.scss';

function App() {
  const [commenters, setCommenters] = useState([])
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')


  function registerComment(ev){
    ev.preventDefault()

    const date = getCurrentDate()

    const newcomments ={
      emailUser: email,
      date: date,
      comment: comment
    }
    
    console.log(newcomments)
    setCommenters([newcomments,...commenters])
    setEmail('')
    setComment('')
  }

  function getCurrentDate(){
    const currentDate = new Date()
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return `${currentDay}/${currentMonth}/${currentYear}`
  }

  return (
    <div className='container'>
      <h2>Seção de Comentários</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="comments">Comentario</label>
        <textarea name="comments" id="comments" cols="30" rows="10" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>

        <button onClick={registerComment}>
          Enviar Comentário
        </button>
        <hr />
        <br />
      </form>

      {commenters.length === 0? (
        <div className='commenters'>
          Seja o primeiro a comentar!
        </div>
      ): (
        <ul>
          {commenters.map( (commenter, index ) => (
            <li key={index}>
              <strong>Email:</strong> {commenter.emailUser}<br />
              <strong>Data:</strong> {commenter.date}<br />
              <strong>Comentário:</strong> {commenter.comment}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
