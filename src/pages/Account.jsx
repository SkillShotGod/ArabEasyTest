import React from 'react'
import NavSidebar from '../components/navsidebar/NavSidebar';
import { useState} from 'react'
import ProfileInformation from './account/ProfileInformation';
import ChangePassword from './account/ChangePassword';


//page with  its own route, we can simply define the state and setstate in navsidebar element but i just wanted to introduce a good instance of prop drilling into the mix since there is not enough code to be written. Ideally, we would just do all of it inside the NavSidebar component if we wanted to
const Account = () => {
  const [currentElement,setCurrentElement] =useState("profileInformation")
  return (
    <>
    <NavSidebar setCurrentElement={setCurrentElement} currentElement={currentElement} />
    <div className='container'>
    {currentElement === "profileInformation" &&<ProfileInformation />}
    {currentElement === "changePassword" && <ChangePassword />}
    </div>
    </>

  )
}

export default Account