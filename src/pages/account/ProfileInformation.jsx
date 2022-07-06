import { useSelector } from "react-redux"
import { useState } from "react"
import {FaPen} from 'react-icons/fa'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom"
import "./account.css"

import Button from "../../components/shared/Button"
const ProfileInformation = () => {
  const navigate = useNavigate()

  const {user}= useSelector((state)=> state.user)
  const initialState={
    ...user
  }
  const [newphone,setPhone]=useState(initialState.phone)
  const [newwhatsapp,setWhatsapp] =useState(initialState.whatsapp)
  const [formData,setFormData]=useState(initialState)

  const onChange= (e)=>{
    if (e.target.id!=="phone" || e.target.id!== "whatsapp"){
      setFormData(
        (prevState)=>(
        {
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }

  }
  

const onCancel = (e)=>{
  e.preventDefault()
  navigate('/')
}
const onSubmit =(e) =>{
  e.preventDefault()
  setFormData((prevState)=>({
    ...prevState,
    phone:newphone,
    whatsapp:newwhatsapp,
  }))
  //dispatch(updateProfile(formData)) Out of scope, we can just make a updateProfile in userService and send the form data and send a put request to the API
}


  return (
    <div className="container">
      <form>

      
      <h2>Profile Information</h2>
      <div>
        <img src={user.image} alt="Image" />
        <label htmlFor="image"><FaPen color="white"  /></label>
        <input id="image" className="hide" type="file" />
      </div>
      <div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type= "text" id="firstName" value={formData.firstName} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="lastName">last Name</label>
          <input type= "text" id="lastName" value={formData.lastName} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="organisation">Organisation</label>
          <input id="organisation" value={formData.organisation} onChange={onChange} />
        </div>
        <div>
        <label htmlFor="phone">Phone Number</label>
          <PhoneInput 
          id="phone"
          placeholder="Enter your Number"
          value={newphone}
          onChange={setPhone}
          />
        </div>
        <div>
        <label htmlFor="whatsapp">WhatsApp Number</label>
          <PhoneInput 
          placeholder="Enter your Number"
          value={newwhatsapp}
          onChange={setWhatsapp}
          />
        </div>
      </div>
      <div>
        <Button onclick={onCancel}>Cancel</Button>
        <Button onclick={onSubmit}>Save</Button>
      </div>
      </form>
    </div>
  )
}

export default ProfileInformation