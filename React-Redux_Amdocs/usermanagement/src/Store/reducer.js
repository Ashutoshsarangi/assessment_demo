
import { actionKeys } from "../Config/action_config";
const getUpdatedUser = (userList, selectedUser)=>{
    const tempUser = JSON.parse(JSON.stringify(userList));
    for(let [index, user] of userList.entries()){
        if(user.id === selectedUser.id){
            tempUser[index] = selectedUser;
        }
    }
    return tempUser;
}

const initialState= {
    userList:[
    ]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionKeys.SET_USER:
            return{
                userList: action.payload
            }
        break;
        case actionKeys.UPDATE_USER:
            return {
                userList: getUpdatedUser(state.userList, action.payload)
            }
        break;
        default:
            return state;
    }
}

export default reducer;