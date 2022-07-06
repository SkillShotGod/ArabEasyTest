import {Link} from 'react-router-dom'
import ChangePassword from '../../pages/account/ChangePassword'
import ProfileInformation from '../../pages/account/ProfileInformation'
import { useState } from 'react'


// This is the component for the sidebar to be used for navigation within the Account route. It was a possibility to simply make different pages for said routes and just use router for it but since we used router once for app.js, might as well just use something different
const NavSidebar = ( {setCurrentElement, currentElement} ) => {

  //function to switch between components. checking if we click on page we already are in, then we do not need to do anything at all
  const changeElement =(e)=>{
    if (e.target.id!==currentElement){
      setCurrentElement(e.target.id)
    }
  }
  return (
    <>
    <div>
      <ul>
      <li id="profileInformation" onClick={changeElement}>Profile Information</li>
      <li id="changePassword" onClick={changeElement}>changePassword</li>
      </ul>

    </div>
    </>
  )
}


export default NavSidebar