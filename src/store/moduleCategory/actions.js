
import axiosInstance from '../../plugins/axios';
export default {
    async createCatProduct({ commit }, bodyFormData) {
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.post('/admin/cat-product', bodyFormData);
            commit('SET_LOADING', false);
            return {
                ok: true,
                data: result
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
    async setCategories({ commit }, status) {
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.get('/admin/cat-product');
            // Xử lý lấy  categories theo trạng thái
            let categoriesPublish = [];
            let categoriesPending = [];
            let categoriesTrash = [];
            let categoriesAll = [];
            result.data.forEach(item => {
                if (item.deleted_at) {
                    categoriesTrash.push(item);
                }
                else {
                    if (item.status == 'publish') {
                        categoriesPublish.push(item);
                        categoriesAll.push(item);
                    }
                    if (item.status == 'pending') {
                        categoriesPending.push(item);
                        categoriesAll.push(item);
                    }
                }


            });

            commit('SET_CATEGORIES_ALL', categoriesAll);
            commit('SET_CATEGORIES_PUBLISH', categoriesPublish);
            commit('SET_CATEGORIES_PENDING', categoriesPending);
            commit('SET_CATEGORIES_TRASH', categoriesTrash);



            // Xử lý lấy ra categories hiện tại 
            let categories = [];
            if (status) {
                let objStatus = ["all", "publish", "pending", "trash"];
                if (objStatus.indexOf(status) != -1) {
                    if (status == 'all') {
                        categoriesAll.forEach(item => {
                            categories.push(item);
                        })
                    }
                    if (status == 'pending') {
                        categoriesPending.forEach(item => {
                            categories.push(item);
                        })
                    }
                    if (status == 'publish') {
                        categoriesPublish.forEach(item => {
                            categories.push(item);
                        })
                    }
                    if (status == 'trash') {
                        categoriesTrash.forEach(item => {
                            categories.push(item);
                        })
                    }
                } else {
                    commit('SET_LOADING', false);
                    return {
                        ok: false,
                    }
                }
            } else {
                categoriesAll.forEach(item => {
                    categories.push(item);
                })
            }

            commit('SET_CATEGORIES', categories);
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
    async goToTrash({ commit, state }, { id, status }) {
        commit('SET_LOADING', true);
        try {
            await axiosInstance.delete('/admin/cat-product/trash/' + id);

            /**
             
             * Bỏ {id} ở categories
             * Bỏ {id} ở categoriesState
             * Lấy {id} 
             * Thêm {id} vào categoriesTrash
             */
            
           

            // Bỏ {id} ở categories
            let categoriesNew = state.categories.filter(item => {
                return item.id != id;
            });
            commit('SET_CATEGORIES', categoriesNew);

            // Bỏ {id} ở categoriesState
            if(status == 'publish'){
                let categoriesPublishNew = state.categoriesPublish.filter(item => {
                    return item.id != id;
                });
                commit('SET_CATEGORIES_PUBLISH', categoriesPublishNew);
            }

            if(status == 'pending'){
                let categoriesPendingNew = state.categoriesPending.filter(item => {
                    return item.id != id;
                });
                commit('SET_CATEGORIES_PENDING', categoriesPendingNew);
            }

             // Lấy {id}
             var catDelete = state.categories.find(category => {
                return category.id == id
            });
            // Thêm {id} vào categoriesTrash

            commit('PUSH_CATEGORIES_TRASH',catDelete);

           
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
    async destroy({commit,state},id){
        commit('SET_LOADING', true);
        try {
            await axiosInstance.delete('/admin/cat-product/' + id);
            // Bỏ {id} ở categories
            let categoriesNew = state.categories.filter(item => {
                return item.id != id;
            });
            commit('SET_CATEGORIES', categoriesNew);
            // Bỏ {id} ở categoriesTrash
            let categoriesTrashNew = state.categoriesTrash.filter(item => {
                return item.id != id;
            });
            commit('SET_CATEGORIES_TRASH', categoriesTrashNew);

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

    async restore({commit,state},{id,status}){
        commit('SET_LOADING', true);
        try {
            await axiosInstance.delete('/admin/cat-product/restore/' + id);
            /**
             * Bỏ {id} ở categories
             * Bỏ {id} ở categoriesTrash
             * Thêm {id} ở categoriesStatus
             */
            
            //  Bỏ {id} ở categories
            let categoriesNew = state.categories.filter(item => {
                return item.id != id;
            });
            commit('SET_CATEGORIES', categoriesNew);

            // Bỏ {id} ở categoriesTrash
            let categoriesTrashNew = state.categoriesTrash.filter(item => {
                return item.id != id;
            });
            commit('SET_CATEGORIES_TRASH', categoriesTrashNew);

            // Thêm {id} ở categoriesStatus
            var catRestore = state.categories.find(category => {
                return category.id == id
            });

            if(status == 'publish'){
                commit('PUSH_CATEGORIES_PUBLISH',catRestore);
            }
            if(status == 'pending'){
                commit('PUSH_CATEGORIES_PENDING',catRestore);
            }

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
    async getCategoryById({commit},id){
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.get('/admin/cat-product/'+id);
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
    },
    async update({commit},{id,bodyFormData}){
        commit('SET_LOADING', true);
        try {
            await axiosInstance.put('/admin/cat-product/'+id, bodyFormData);
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