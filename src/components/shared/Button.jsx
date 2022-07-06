import React from 'react'
// since button is something we would use here and there, making a shared component with props passed down as required argumennts is acceptable
const Button = ({ onclick, children}) => {
  return (
    <button onClick={onclick} >{children} </button>
  )
}

export default Button