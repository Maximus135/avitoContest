import React, {useEffect, useState} from 'react';
import { getSubCommentsThunk } from '../../redux/thunks/getSubCommentsThunk';
import * as Styled from './CommentItem.styled';

type CommentItemPropsType ={
    id: number,
    author: string,
    text: string,
    kids: Array<number>
}

const CommentItem = ({id, author, text, kids}: CommentItemPropsType) =>{

    const getSubComments = (kids:Array<number>) =>{
        console.log(kids);
        getSubCommentsThunk(kids);
        // console.log(comments);
    }

    return(
        <Styled.StyledWrapper>
            <Styled.UserWrapper>
            <   Styled.StyledUser />
                <Styled.StyledUserName>{author}</Styled.StyledUserName>
            </Styled.UserWrapper>
            <Styled.StyledMessageWrapper>
                <Styled.StyledMessage>{text}</Styled.StyledMessage>
            </Styled.StyledMessageWrapper>
            {kids.length > 0 && <Styled.StyledDownArrow onClick={()=>getSubComments(kids)}/>}
        </Styled.StyledWrapper>
    ) 
}

export default CommentItem;