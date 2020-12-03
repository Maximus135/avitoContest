import { NewsItemType } from './../../types/types';
import { GET_ITEM_NEWS , WAITING_ITEM_NEWS} from '../actions/GetNewsItemAction';

const initialState = {
    newsItem: {} as NewsItemType,
    isFetching: false,
}

const GetNewsItemReducer = (state = initialState, action: any)=>{
    console.log(state, action);
    switch(action.type){
        case GET_ITEM_NEWS:
            return{
                ...state,
                newsItem: action.newsItem,
                isFetching: false
            }
        case WAITING_ITEM_NEWS:
            return{
                ...state,
                isFetching: true,
            }
        default:
            return state
    }
}

export default GetNewsItemReducer;
