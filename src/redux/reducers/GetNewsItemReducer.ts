import { NewsItemType } from './../../types/types';
import {
    GET_ITEM_NEWS, WAITING_ITEM_NEWS,
    CLEAR_ITEM_NEWS
} from '../actions/GetNewsItemAction';

const initialState = {
    newsItem: {} as NewsItemType,
    isFetching: false,
}

const GetNewsItemReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ITEM_NEWS:
            return {
                ...state,
                newsItem: action.newsItem,
                isFetching: false
            }
        case WAITING_ITEM_NEWS:
            return {
                ...state,
                isFetching: true
            }
        case CLEAR_ITEM_NEWS:
            return {
                ...state,
                newsItem: {}
            }
        default:
            return state
    }
}

export default GetNewsItemReducer;
