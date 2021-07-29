export default {
    categories(state){
        if(state.categories){
            return state.categories;
        }
    },
    categoriesAll(state){
        if(state.categoriesAll){
            return state.categoriesAll;
        }
    },
    categoriesPublish(state){
        if(state.categoriesPublish){
            return state.categoriesPublish;
        }
    },
    categoriesPending(state){
        if(state.categoriesPending){
            return state.categoriesPending;
        }
    },
    categoriesTrash(state){
        if(state.categoriesTrash){
            return state.categoriesTrash;
        }
    },
}