import React, {useEffect, useState} from 'react';
import * as Styled from './Comments.styled';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/store';
import {getCommentsThunk, getRootCommentsThunk} from '../../redux/thunks/getCommentsThunk';

type CommentsType ={
    commentsId:Array<number>
}

const Comments = ({commentsId}:CommentsType)=>{
    const state = useSelector((state:AppStateType)=>state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!state.RootComments.comments.length){
            dispatch(getRootCommentsThunk(commentsId));
        }
        console.log(state);
    },[state.RootComments.comments]);


return<div>sad</div>

}

export default Comments;