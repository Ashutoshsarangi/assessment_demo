
import {getUserAPI, updateUserAPI} from '../API/user-api';
import {actionKeys} from '../Config/action_config';

export const setUser = ()=>{
    return async(dispatch) =>{
        const result = await getUserAPI('/users');
        dispatch(setUserSync(result));
    }

}

const setUserSync = (result)=>{
    return {type: actionKeys.SET_USER, payload: result};
}

export const updateUser = (selectedUser)=>{
    return async(dispatch) =>{
        const result = await updateUserAPI('/users',selectedUser);
        dispatch(updateUserSync(result));
    }

}

const updateUserSync = (result)=>{
    return {type: actionKeys.UPDATE_USER, payload: result};
}