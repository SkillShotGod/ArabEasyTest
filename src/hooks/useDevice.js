import {useState, useEffect} from 'react'

//a custom hook to check if the device is mobile or not
export const useDevice = () =>{
    const [isMobile, setisMobile] = useState(false)

    useEffect(()=>{
        if(window.innerHeight>window.innerWidth){
            setisMobile(true)
        }else{
            setisMobile(false)
        }
    },[window])

return {isMobile}
}

