import axios from "axios";
import { getAllProductFail, getAllProductStart, getAllProductSuccess } from "./productSlice";
import { getAllUserFail, getAllUserStart, getAllUserSuccess, loginFail, loginStart, loginSuccess, logOutFail, logOutStart, logOutSuccess, registerFail, registerStart, registerSuccess } from "./userSlice";


const host = 'http://localhost:9000'

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${host}/v1/user/login`, user)
        if (res.data.isAdmin) {
            dispatch(loginSuccess(res.data))
        }else{
            dispatch(loginSuccess())
        }
    } catch (error) {
        dispatch(loginFail())
    }
}


export const logoutUser = async(accessToken,user,dispatch)=>{
    dispatch(logOutStart())
    try {
        await axios.post(`${host}/v1/user/logout`,user,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(logOutSuccess())
    } catch (error) {
        dispatch(logOutFail())
    }
}

export const getAllUser = async(accessToken,dispatch) =>{
    dispatch(getAllUserStart())
    try {
        const res = await axios.get(`${host}/v1/user`,{
            headers: {token: `Bearer ${accessToken}`}
        })
        dispatch(getAllUserSuccess(res.data))
    } catch (error) {
        dispatch(getAllUserFail())
    }
}

export const updateUser = async(id,accessToken,userUpdate,dispatch) =>{
    dispatch(registerStart())
    try {
       await axios.put(`${host}/v1/user/${id}`,userUpdate,{
            headers: {token: `Bearer ${accessToken}`}
        })
        dispatch(registerSuccess())
    } catch (error) {
        dispatch(registerFail())
    }
}

export const getAllProduct = async (dispatch) =>{
    dispatch(getAllProductStart())
    try {
        const res = await axios.get(`${host}/v2/product`);
        dispatch(getAllProductSuccess(res.data));
    } catch (error) {
        dispatch(getAllProductFail())
    }
}

