import { RootCommentType } from "../../types/types";

export const GET_ROOT_COMMENTS = 'GET_ROOT_COMMENTS';
export const WAITING_ROOT_COMMENTS = 'WAITING_ROOT_COMMENTS';

export const getRootCommentsAction = (comments:Array<RootCommentType>) =>(
    {type: GET_ROOT_COMMENTS,
    comments: comments}
);

export const waitingRootCommentsAction = () =>(
    {type: WAITING_ROOT_COMMENTS}
);