import {TOKEN_NAME} from '../../constants/config'
export default {
    currentUser(state){
        if(state.currentUser){
            return state.currentUser;
        }
    },
    isLogin(state){
        if(state.token == localStorage.getItem(TOKEN_NAME) && localStorage.getItem(TOKEN_NAME)){
            return true;
        }
        return false;
    },
    
}