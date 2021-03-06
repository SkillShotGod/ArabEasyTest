import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import mockImage from "../../assets/images/mockImage.png"
import { useDispatch } from 'react-redux'
import { logout } from '../../features/user/userSlice'

const Dropdown = () => {
    const [open,setOpen]=useState(false)
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    
    const DropdownList =() =>{
        return(
            <>
            <div className='dropdown-menu'>
            <li><Link to="/account" className={open ? 'dropdown-link active' : 'dropdown-link'}>Account</Link></li>
            <li><Link to="/" onClick={()=>{
                dispatch(logout())
            }} className={open ? 'dropdown-link active' : 'dropdown-link' }>Logout</Link></li>
            </div>
            </>
        )
    }
return (
    <div className="header__user">
    <div className="dropdown">
    <button  className={ open ? "dropdown-button active" : "dropdown-button"} onClick={() => setOpen(!open)}>
        <p>Hi {user.firstName}, </p>
        <div className="avatar avatar--medium">
                <img src={mockImage}  alt="displayIMG" />
            </div> 
    </button>

    {open && <DropdownList />}
    </div>
    </div>
)
}

export default Dropdown