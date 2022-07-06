import {Link} from 'react-router-dom'
import ChangePassword from '../../pages/account/ChangePassword'
import ProfileInformation from '../../pages/account/ProfileInformation'
import { useState } from 'react'
const NavSidebar = ( {setCurrentElement, currentElement} ) => {
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