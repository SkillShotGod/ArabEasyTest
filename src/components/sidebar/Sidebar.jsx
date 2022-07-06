import {FaShoppingBag} from 'react-icons/fa'
import {BsFillChatLeftTextFill} from 'react-icons/bs'

//component for the sidebar for what looks as a shopping bag and a chat that would be present on every page i am assuming.
const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
      <div className="sidebarWrapper">

        <FaShoppingBag />
        <BsFillChatLeftTextFill />
      </div>
    </div>
    </>
  )
}

export default Sidebar