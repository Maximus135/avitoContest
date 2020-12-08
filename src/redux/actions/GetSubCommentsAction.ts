import { SubCommentType } from "../../types/types";


export const GET_SUB_COMMENTS = 'GET_SUB_COMMENTS';
export const WAITING_SUB_COMMENTS = 'WAITING_SUB_COMMENTS';

export const getSubCommentsAction = (subComments:Array<Array<SubCommentType>>) =>(
    {type: GET_SUB_COMMENTS,
        subComments: subComments}
)

export const waitingSubCommentsAction = () =>(
    {type: WAITING_SUB_COMMENTS}
);