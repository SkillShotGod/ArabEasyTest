import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, reset } from '../features/user/userSlice'
const Home = () => {
//nothing to do in home page, but we had to make a default route atleast, so we are dispatching our action to get a user off our fake API from here. displaying use of useDispatch along with the useEffect. This although as a sideeffect of everytime we are going to home, we are fetching a new user. The way to avoid this is to check if we have user already then we do not dispatch.
  const dispatch = useDispatch()
  useEffect(()=>{
    
      dispatch(getUser())
    
    
},[])
return (
    <div className="hero-container">
      <h2>Click on Profile Nav above and click on Account</h2>
    </div>
  )
}

export default Home