import { GetComment } from '../../API/getCommnet';
import {getRootCommentsAction, waitingRootCommentsAction, setRootCommentEnded} from '../actions/GetRootCommentsAction';
import { RootCommentType } from '../../types/types';


const rootComments: Array<RootCommentType> = [];
let latestNewsId: Array<number> = [];
let savedId = 0;


export const getRootCommentsThunk  = (id: Array<number>, fullUpdate: boolean = false ) => (async (dispatch: any) =>{
    dispatch(waitingRootCommentsAction());

    if(fullUpdate){
        savedId = 0;
        latestNewsId.length = 0;
        rootComments.length = 0;
    }

    let rootComment: RootCommentType = {
        id: 0,
        author: '',
        text: '',
        kids: [],
        deleted: false
    };
    
    console.log(latestNewsId);

    for(let i = savedId; i < savedId+5; i++){
        rootComment = await GetComment(id[i]).then(responce=>{
            return {
                id: responce.id,
                author: responce.by,
                text: responce.text,
                kids: responce.kids ? responce.kids: 0,
                deleted: responce.deleted ? true : false
            }
        }).catch((error=>{
            dispatch(setRootCommentEnded());
            return{
                id: 0,
                author: '',
                text: '',
                kids: [],
                deleted: true
            }
        }));
        if(!rootComment.deleted){
            rootComments.push(rootComment);
        }
    }
    savedId += 5;
    dispatch(getRootCommentsAction(rootComments));
})