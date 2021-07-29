import axiosInstance from '../../plugins/axios';
export default {
    async addPermission({commit},data){
        commit('SET_LOADING', true);
        try {
            await axiosInstance.post('/admin/permission',data);

            commit('SET_LOADING', false);
            return {
                ok: true,
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                data: null,
                error: error

            }
        }
    },
    async getListPermission({commit}){
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.get('/admin/permission');
            commit('SET_PERMISSIONS',result.data);
            commit('SET_LOADING', false);
            return {
                ok: true,
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                data: null,
                error: error

            }
        }
    }
}