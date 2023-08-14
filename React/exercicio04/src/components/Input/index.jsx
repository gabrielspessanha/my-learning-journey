import PropTypes from 'prop-types'

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPaswordSize: PropTypes.func
}

export default function Input(props){
  return (
    <input
      {...props}
      min={1}
      onChange={(ev)=>{
        props.setValue(ev.target.value)
      }}
       />
  )
}