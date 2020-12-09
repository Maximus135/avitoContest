import React, {useEffect, useState} from 'react';
import * as Styled from './Comments.styled';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/store';
import {getRootCommentsThunk} from '../../redux/thunks/getRootCommentsThunk';
import CommentItem from '../CommentItem/CommentItem';
import { RootCommentType } from '../../types/types';
import SubLoader from '../SubLoader/SubLoader';

type CommentsType ={
    commentsId:Array<number>
}

const Comments = ({commentsId}:CommentsType)=>{
    const state = useSelector((state:AppStateType)=>state.RootComments);
    console.log(state);
    const dispatch = useDispatch();
    const [commentsArray, setcommentsArray] = useState([]);

    const getMoreComments = () =>{
        dispatch(getRootCommentsThunk(commentsId));
    }

    useEffect(() => {
        if(commentsId.length && !state.comments.length){
            dispatch(getRootCommentsThunk(commentsId));
        }
        setcommentsArray(state.comments.map((element:RootCommentType)=><CommentItem id={element.id} author={element.author} text={element.text} kids={element.kids} />));
    },[commentsId, state.comments, setcommentsArray]);

    useEffect(() => {
        setcommentsArray(state.comments.map((element:RootCommentType)=><CommentItem id={element.id} author={element.author} text={element.text} kids={element.kids} />));
    },[commentsId, state]);


    if(state.isFetching && !state.comments.length){
        return <SubLoader />
    }

return(
    <Styled.StyledComments>
        {commentsArray.map((element)=>element)}
        {(state.isFetching && state.comments.length) && <SubLoader />}
        {(!state.isFetching && state.comments.length && !state.isLastComment) && <Styled.StyledDownArrow onClick={getMoreComments} />}
    </Styled.StyledComments>)
}

export default Comments;