import { GetComment } from '../../API/getCommnet';
import {getCommentsAction, waitingCommentsAction, getRootCommentsAction, waitingRootCommentsAction} from '../actions/GetCommentsAction';
import { RootCommentType } from './../../types/types';

export const getCommentsThunk = () =>{

};

export const getRootCommentsThunk  = (id: Array<number>) => (async (dispatch: any) =>{
    dispatch(waitingRootCommentsAction());

    const rootComments:Array<RootCommentType> = [];
    let rootComment: RootCommentType = {
        id: 0,
        author: '',
        text: '',
        kids: [],
        deleted: false
    };

    for(let i = 0; i < id.length; i++){
        rootComment = await GetComment(id[i]).then(responce=>{
            return {
                id: responce.id,
                author: responce.by,
                text: responce.text,
                kids: responce.kids ? responce.kids: 0,
                deleted: responce.deleted ? true : false
            }
        })
        if(!rootComment.deleted){
            rootComments.push(rootComment);
        }
    }

    dispatch(getRootCommentsAction(rootComments));
})