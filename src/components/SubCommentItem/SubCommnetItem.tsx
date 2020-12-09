import React from 'react';
import * as Styled from './SubCommentItem.styled';

type SubCommentItemType = {
    level: number
    // id: number
    // author: string
    // text: string
    // kids: Array<number>
    // deleted: boolean
}

const SubCommentItem = ({level}:SubCommentItemType) =>(
    <Styled.StyledSubCommentItemWrapper level={level}>

    </Styled.StyledSubCommentItemWrapper>
)

export default SubCommentItem;