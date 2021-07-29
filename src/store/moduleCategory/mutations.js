export default {
    SET_CATEGORIES(state,categories){
        state.categories = categories;
    },
    SET_CATEGORIES_ALL(state,categories){
        state.categoriesAll = categories;
    },
    SET_CATEGORIES_PUBLISH(state,categories){
        state.categoriesPublish = categories;
    },
    SET_CATEGORIES_PENDING(state,categories){
        state.categoriesPending = categories;
    },
    SET_CATEGORIES_TRASH(state,categories){
        state.categoriesTrash = categories;
    },
    PUSH_CATEGORIES_TRASH(state,catDelete){
        state.categoriesTrash.push(catDelete);
    },
    PUSH_CATEGORIES_PUBLISH(state,catRestore){
        state.categoriesPublish.push(catRestore);
    },
    PUSH_CATEGORIES_PENDING(state,catRestore){
        state.categoriesPending.push(catRestore);
    }




}