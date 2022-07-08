import axios from 'axios'
const API_URL = "https://randomuser.me/api/?nat=IN"


//just a function made to show how the async functions are handled. it simply is hitting a mock API to get some data we can use, and editing it as per usage before sending it to our Slice
const getUser = async () =>{
 const response = await axios.get(API_URL)

 if (response.data){
    const simplifiedData = response.data.results[0]
    localStorage.setItem('user',JSON.stringify(simplifiedData))
    
 const requiredData ={
    firstName: simplifiedData.name.first,
    lastName: simplifiedData.name.last,
    email: simplifiedData.login.username +"@gmail.com",
    organisation: simplifiedData.login.username+"'s Company",
    imageSmall: simplifiedData.picture.thumbnail,
    image: simplifiedData.picture.large,
    phone: "+91"+simplifiedData.phone,
    whatsapp:"+91"+ simplifiedData.cell
}
 return requiredData
}
}

const logout = () => localStorage.removeItem('user')


const userService ={
    getUser,
    logout,
}

export default userService