
import { useState } from 'react';
import './styles/global.scss';

function App() {
  const [commenters, setCommenters] = useState([])
  function registerComment(ev){
    ev.preventDefault()

    const email = document.querySelector('#email').value
    const textarea = document.querySelector('#comments').value

    const comments ={
      emailUser: email,
      date: "12/09/2023",
      comment: textarea
    }

    setCommenters(comments)
    console.log(comments)

  }

  return (
    <div className='container'>
      <h2>Seção dde Comentários</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <label htmlFor="comments">Comentario</label>
        <textarea name="comments" id="comments" cols="30" rows="10"></textarea>

        <button onClick={registerComment}>
          Enviar Comentário
        </button>
        <hr />
        <br />
      </form>

      <div className='commenters'>
        Seja o primeiro a comentar!
      </div>
    </div>
  )
}

export default App
