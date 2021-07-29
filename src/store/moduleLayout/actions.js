import axiosInstance from '../../plugins/axios';
export default {
    async getInfoSystemGenaral({commit}){
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.get('/admin/setting/general');
            commit('SET_LOADING', false);
            return {
                ok: true,
                data: result.data
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