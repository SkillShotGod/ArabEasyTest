import {Link,  useLocation} from 'react-router-dom'
import logo from '../../logo.jpg'
import "./header.css"
import Dropdown from './Dropdown'
import { useState } from 'react'
import { useEffect } from 'react'

//A header component since it will be available on every page
const Header = () => {
    const [title,setTitle]= useState("ArabEasy")
    //getting the path after the primary domain
    const path = useLocation()
    useEffect(()=>{
        //Getting the title from URL and editing it to capitalize first character
        const newtitle = path.pathname.slice(1,path.pathname.length).charAt(0).toUpperCase() + path.pathname.slice(2)
        setTitle(newtitle)
    },[path])
    
        
        

   
    

return (
    <div className="header-container">
    <header className='header'>
        <div className="container">
            <Link to='/' className="header__logo">
            <img src={logo} alt="logo" className='logo__site'/>
            <h1>{title ? title : "ArabEasy"}</h1>
            </Link>
            
        
            <Dropdown />
        </div>
        
    </header>
    
    </div>
)
}

export default Header