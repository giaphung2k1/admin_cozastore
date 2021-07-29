import {TOKEN_NAME} from '../../constants/config';
export default {
    token:localStorage.getItem(TOKEN_NAME),
    currentUser:{},
}