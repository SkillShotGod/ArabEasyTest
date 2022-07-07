import {FaLessThan} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const BackButton = ({ url,children}) => {
  return (
    <Link to ={url} className ='btn--back' ><FaLessThan font-size={"6px"} /> <p>{children}</p></Link>
    
  )
}

export default BackButton