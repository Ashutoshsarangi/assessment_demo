
import axios from 'axios';
import { BASE_URL } from '../Config/app_config';



export const getUserAPI = async(endpoint)=>{
    const result = await axios.get(`${BASE_URL}${endpoint}`).catch((Err)=>{
        console.log('Error', Err);
    });
    return result.data;
}

export const updateUserAPI = async(endpoint, user)=>{
    const result = await axios.put(`${BASE_URL}${endpoint}/${user.id}`, user).catch((err)=>{
        console.log('Error', err);
    });
    return result.data;
}