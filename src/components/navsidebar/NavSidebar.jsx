import {Link} from 'react-router-dom'
import {useDevice} from '../../hooks/useDevice'
import {useState} from "react"
import ProfileInformation from "../../pages/account/ProfileInformation"
import ChangePassword from "../../pages/account/ChangePassword"
import "./navsidebar.css"

// This is the component for the sidebar to be used for navigation within the Account route. It was a possibility to simply make different pages for said routes and just use router for it but since we used router once for app.js, might as well just use something different
const NavSidebar = (  ) => {

  const {isMobile} = useDevice()
  //function to switch between components. checking if we click on page we already are in, then we do not need to do anything at all
  
  //function to have different type of navigation depending on if we are on a desktop or mobile device

  const AccountNavigation =() =>{
    const [currentElement,setCurrentElement] =useState("profileInformation")

    if (isMobile){
      
      return(<div className='account-nav-mobile'>
        <h2>Account</h2>
      <Link className='account-nav-mobile-item' to="/profile-information"> Profile Information</Link>
      <Link className='account-nav-mobile-item' to="/"> Change Password</Link>
      
      </div>)
    }
    else{
      const changeElement =(e)=>{
        if (e.target.id!==currentElement){
          setCurrentElement(e.target.id)
        }
      }
      return(<>
      <div className='account-nav-sidebar'>
        <ul className='nav-sidebar-container'>
          
          <li className='account-nav-item' id="profileInformation" onClick={changeElement}>Profile Information</li>
          <li className='account-nav-item' id="changePassword" onClick={changeElement}>Change Password</li>
        </ul>
        {currentElement==="profileInformation" && <ProfileInformation />}
        {currentElement==="changePassword" && <ChangePassword />}

        

    </div>
      </>)
    }
  }
  return (
    <AccountNavigation />
  )
}


export default NavSidebar