
import "./sidebar.css"
import assignmentNav from "../../assets/images/assignmentNav.svg"
import messageSquare from "../../assets/images/messageSquare.svg"

//component for the sidebar for what looks as a shopping bag and a chat that would be present on every page i am assuming.
const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>

        <li className='sidebar-item grow-transition'><img src={assignmentNav} alt="icon"/></li>
        <li className='sidebar-item'><img src={messageSquare} alt="icon"/></li>
      
    </div>
    </>
  )
}

export default Sidebar