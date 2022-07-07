import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Dropdown = () => {
    const [open,setOpen]=useState(false)
    const {user} = useSelector((state)=>state.user)

    const DropdownList =() =>{
        return(
            <>
            <div className='dropdown-menu'>
            <li><Link to="/account" className={open ? 'dropdown-link active' : 'dropdown-link'}>Account</Link></li>
            <li><Link to="/" className={open ? 'dropdown-link active' : 'dropdown-link' }>Logout</Link></li>
            </div>
            </>
        )
    }
return (
    <div className="header__user">
    <div className="dropdown">
    <button  className={ open ? "dropdown-button active" : "dropdown-button"} onClick={() => setOpen(!open)}>
        <p>Hi {user.firstName} , </p>
        <div className="avatar avatar--medium">
                <img src={user.imageSmall}  alt="displayIMG" />
            </div> 
    </button>

    {open && <DropdownList />}
    </div>
    </div>
)
}

export default Dropdown