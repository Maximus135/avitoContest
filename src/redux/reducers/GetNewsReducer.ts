import { GET_NEWS, WAITING_NEWS } from '../actions/GetNewsActions';
import { NewsType } from '../../types/types';

const initialState = {
    news: [] as Array<NewsType>,
    isFetching: false,
}

const GetNewsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.news,
                isFetching: false
            }
        case WAITING_NEWS:
            return {
                ...state,
                isFetching: true,
            }
        default:
            return state
    }
}

export default GetNewsReducer;
