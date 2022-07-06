import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService'

//storing the user in local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
    //since our app depends on fetching data from a mock API for a lot of its predefined states, we are assuming the user is logged in, so we need to pass an initial blank value or the app breaks even before we can begin.
    user: {
        firstName: "",
        lastName:"" ,
        email: "",
        organisation:"" ,
        imageSmall:"" ,
        image: "",
        phone: "",
        whatsapp:"",
    },
    returnedError: false,
    returnedSuccess: false,
}

// Function to get user Data from a backend (since we dont have one we will use some open source API to return us some mock data)
export const getUser = createAsyncThunk ('user/get', async(user, thunkAPI)=>{
    try{
        return await userService.getUser()
    }
    catch(error){
        console.log(error)

        return thunkAPI.rejectWithValue(error.response)
    }
})

//creating the slice for reducers and extrareducers, basic redux toolkit
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        reset: (state)=>{
            state.returnedError =false
            state.returnedSuccess = false
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getUser.fulfilled, (state,action)=>{
            state.returnedSuccess=true
            state.user=action.payload
        })
        .addCase(getUser.rejected, (state)=>{
            state.returnedError = true
        })
    }
})

export const{
    reset,
} = userSlice.actions
export default userSlice.reducer