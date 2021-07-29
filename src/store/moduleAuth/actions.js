import axiosInstance from '../../plugins/axios'
export default {
    async login({commit},dataObj){
        commit('SET_LOADING',true);
        try {
            let result  = await axiosInstance.post('/auth/login',dataObj);
            commit('SET_LOADING',false);
            if(result.status == 200){
                return {
                    ok:true,
                    data:result.data
                }
            }
            
        } catch (error) {
            commit('SET_LOADING',false);
            return {
                ok:false,
                data:null,
                error:error
                
            }
        }
    },
    async logout({commit,dispatch},token){
        commit('SET_LOADING',true);
        try {
            let config = {
                headers: {
                    'Authorization':'Bearer '+token
                }
            }
            let result =  await axiosInstance.post('/auth/logout',[],config);
            let dataDefault = {
                token:'',
                currentUser:{}
            }
            await dispatch('setValueLogin',dataDefault);
            commit('SET_LOADING',false);
            if(result.status == 200){
                return {
                    ok:true
                }
            }
        } catch (error) {
            commit('SET_LOADING',false);
            return {
                ok:false,
                data:null,
                error:error
                
            }
        }
    },
    async setValueLogin({commit,dispatch},{token,currentUser=null}){
        if(currentUser){
            commit('SET_VALUE_LOGIN',{token,currentUser});
            return {
                ok:true
            }
        }
        else{
            let objCurrentUser  = await dispatch('getCurrentUser',token);
            if(objCurrentUser.ok){
                let currentUser = objCurrentUser.data;
                commit('SET_VALUE_LOGIN',{token,currentUser});
                return {
                    ok:true
                }
            }    
            else{
                let data = {
                    token:'',
                    currentUser:{}
                }
                commit('SET_VALUE_LOGIN',data);
                return {
                    ok:false
                }
            }   
            
        }
        
    },
    async getCurrentUser({commit},token){
        commit('SET_LOADING',true);
        try {
            let config = {
                headers: {
                    'Authorization':'Bearer '+token
                }
            }
      
            let result = await axiosInstance.get('/auth/user-profile',config);
            commit('SET_LOADING',false);
            if(result.status == 200){
                return {
                    ok:true,
                    data:result.data
                }
            }
        } catch (error) {
            commit('SET_LOADING',false);
            return {
                ok:false,
                data:null,
                error:error 
            }
        }
    },

    async updateProfile({commit,state},data){
        commit('SET_LOADING',true);
        try {
            let result = await axiosInstance.post('/admin/profile',data);
            if(!data.avatar){
                let objCurrentUser = {...state.currentUser}
                objCurrentUser.name = data.name;
                objCurrentUser.email = data.email;
                objCurrentUser.address = data.address;
                commit('SET_CURRENT_USER',objCurrentUser);
            }
            
            commit('SET_LOADING',false);
            if(result.status == 200){
                return {
                    ok:true,
                }
            }
        } catch (error) {
            commit('SET_LOADING',false);
            return {
                ok:false,
                data:null,
                error:error 
            }
        }
    }
    
}