import Poster from '../Poster'
import Text from '../Text'
import './styles.css'

function Card(props) {
  return (
    <div className="container">
      <Poster img={props.img} />
      <Text title={props.title} />
    </div>
  )
}

export default Card
