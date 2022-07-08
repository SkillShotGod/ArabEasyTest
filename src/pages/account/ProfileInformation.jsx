import { useSelector } from "react-redux"
import { useState } from "react"
import {FaPen} from 'react-icons/fa'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom"
import "./account.css"
import Button from "../../components/shared/Button"
import {useDevice} from "../../hooks/useDevice"
import BackButton from "../../components/shared/BackButton"
import mockImage from "../../assets/images/mockImage.png"
const ProfileInformation = () => {
  const {isMobile} = useDevice()
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
  const requiredData ={
    ...formData,
    phone:newphone,
    whatsapp:newwhatsapp,
  }
  console.log(requiredData)
  //dispatch(updateProfile(formData)) Out of scope, we can just make a updateProfile in userService and send the form data and send a put request to the API
}


  return (
    <>
    {isMobile && <BackButton url="/account">Profile Information</BackButton>}
    <div className="profile-container">
      
      <form>
      
      {!isMobile && <h3>Profile Information</h3>}
      <div className="form-container">
        <div className="image-container">
          <img src={mockImage} alt ="DisplayIMG"/>
            <div className="image-edit">
              <label className="no-margin" htmlFor="image"><FaPen color="white"  /></label>
              <input id="image" className="hide" type="file" />
            </div>
        </div>
        <div className="profile-information-box">
          <div className="information-box-one">
            <div className="form-item">
              <label htmlFor="firstName">First Name</label>
              <input type= "text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={onChange} />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={onChange} />
            </div>
            <div className="form-item" >
              <label htmlFor="phone">Phone Number</label>
                <div className="phone-input"><PhoneInput 
                id="phone"
                placeholder="Number"
                value={newphone}
                onChange={setPhone}
                />
                </div>
            </div>
            
          </div>
          <div className="information-box-two">
            <div className="form-item">
              <label htmlFor="lastName">last Name</label>
              <input type= "text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={onChange} />
            </div>
            <div className="form-item">
              <label htmlFor="organisation">Organisation</label>
              <input id="organisation" placeholder="Organisation Name" value={formData.organisation} onChange={onChange} />
            </div>
            
            <div className="form-item">
            <label htmlFor="whatsapp">WhatsApp Number</label>
              <PhoneInput 
              placeholder="Number"
              value={newwhatsapp}
              onChange={setWhatsapp}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <Button datatype={"secondary"} onclick={onCancel}>Cancel</Button>
          <Button datatype={"primary"} onclick={onSubmit}>Save</Button>
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default ProfileInformation