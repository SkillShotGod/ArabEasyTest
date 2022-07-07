import { Navigate,Outlet } from "react-router-dom"
import { useDevice } from '../../hooks/useDevice'

//a protected route that uses our custom hook to check if device is mobile or not. If mobile we navigate to a new page else we outlet it to load the component in a different way.
const MobileRoute = () => {
    const {isMobile} =useDevice()

    return (
    isMobile && <Outlet /> 
    )
}

export default MobileRoute