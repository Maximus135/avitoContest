import React from 'react';
import * as Styled from './SubCommentItem.styled';

type SubCommentItemType = {
    level: number
    author: string
    text: string
}

const SubCommentItem = ({ level, author, text }: SubCommentItemType) => (
    <Styled.StyledSubCommentItemWrapper level={level}>
        <Styled.StyledNickNameWrapper>
            <Styled.StyledUpArrow />
            <Styled.StyledNickName>{author}</Styled.StyledNickName>
        </Styled.StyledNickNameWrapper>
        <Styled.StyledText level={level}>{text}</Styled.StyledText>
    </Styled.StyledSubCommentItemWrapper>
)

export default SubCommentItem;