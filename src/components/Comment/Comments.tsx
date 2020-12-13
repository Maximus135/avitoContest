import React, { useEffect, useState } from 'react';
import * as Styled from './Comments.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { getRootCommentsThunk } from '../../redux/thunks/getRootCommentsThunk';
import CommentItem from '../CommentItem/CommentItem';
import { RootCommentType } from '../../types/types';
import SubLoader from '../SubLoader/SubLoader';


type CommentsType = {
    commentsId: Array<number>
    fullUpdateNews: () => void
}


const Comments = ({ commentsId, fullUpdateNews }: CommentsType) => {

    const state = useSelector((state: AppStateType) => state.RootComments);
    const dispatch = useDispatch();

    const [commentsArray, setcommentsArray] = useState([]);
    const comments = state.comments;
    const showDropDownArrowForMoreCommnets = !state.isFetching && comments.length && !state.isLastComment;

    const getMoreComments = () => {
        dispatch(getRootCommentsThunk(commentsId));
    }


    useEffect(() => {
        if (commentsId.length && !comments.length) {
            dispatch(getRootCommentsThunk(commentsId));
        }
        setcommentsArray(comments.map((element: RootCommentType) =>
            <CommentItem id={element.id} author={element.author} text={element.text} kids={element.kids} key={element.id + element.author + Math.random()} />));
    }, [commentsId, comments, dispatch]);

    useEffect(() => {
        setcommentsArray(comments.map((element: RootCommentType) =>
            <CommentItem id={element.id} author={element.author} text={element.text} kids={element.kids} key={element.id + element.author + Math.random()} />));
    }, [commentsId, state, comments]);


    if (state.isFetching && !comments.length) {
        return <SubLoader />
    }

    return (
        <Styled.StyledComments>
            <Styled.StyledRefresh onClick={fullUpdateNews} />
            {commentsArray.map((element) => element)}
            {(state.isFetching && comments.length) && <SubLoader />}
            {(showDropDownArrowForMoreCommnets) && <Styled.StyledDownArrow onClick={getMoreComments} />}
        </Styled.StyledComments>)
}

export default Comments;