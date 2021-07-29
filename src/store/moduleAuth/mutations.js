export default{
    SET_VALUE_LOGIN(state,data){
        state.token = data.token;
        state.currentUser = data.currentUser;
    },
    SET_CURRENT_USER(state,data){
        state.currentUser = data;
    }
  
}