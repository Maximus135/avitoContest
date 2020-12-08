import { RootCommentType } from '../../types/types';
import { GET_ROOT_COMMENTS , WAITING_ROOT_COMMENTS} from '../actions/GetRootCommentsAction';

const initialState = {
    comments: [] as Array<RootCommentType>,
    isFetching: false,
}

const GetRootCommentReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case GET_ROOT_COMMENTS:
            return{
                ...state,
                comments: action.comments,
                isFetching: false
            }
        case WAITING_ROOT_COMMENTS:
            return{
                ...state,
                isFetching: true,
            }
        default:
            return state
    }
}

export default GetRootCommentReducer;
