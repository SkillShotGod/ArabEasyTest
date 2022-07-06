import {Link, useNavigate} from 'react-router-dom'
import logo from '../Logo.svg'
import { getUser } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

//A header component since it will be available on every page
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user} = useSelector((state)=>state.user)
    //getting the path after the primary domain
    const path = window.location.pathname

    //Getting the title from URL and editing it to capitalize first character
    const title = path.slice(1,path.length).charAt(0).toUpperCase() + path.slice(2)
    console.log(user)

return (
    <>
    <div>
    <Link to='/'>
    <img src={logo} className="header-logo" alt="logo" />
    </Link>
    {title ? title : "ArabEasy"}
    </div>
    <div>
    <p>Hi, {user.firstName} ,</p>  
     <img src={user.imageSmall} className="user-image" alt="Image" />
        <div>
        <Link to='/account'>Account</Link>
        <Link to='/'><div>Logout</div></Link>    
        </div>
        
    </div>
    </>
)
}

export default Header