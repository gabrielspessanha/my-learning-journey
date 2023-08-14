import PropTypes from 'prop-types'

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPaswordSize: PropTypes.func
}

export default function Input(props){
  return (
    <input
      type='number'
      id='passwordSize'
      value={props.passwordSize}
      onChange={ev => props.setPaswordSize(+ev.target.value)}
       />
  )
}