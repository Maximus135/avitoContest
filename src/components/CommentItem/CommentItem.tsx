import React, { useEffect, useState } from 'react';
import { getSubCommentsThunk } from '../../redux/thunks/getSubCommentsThunk';
import * as Styled from './CommentItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import SubLoader from '../SubLoader/SubLoader';
import SubCommentItem from '../SubCommentItem/SubCommnetItem';

type CommentItemPropsType = {
    id: number,
    author: string,
    text: string,
    kids: Array<number>
}

const CommentItem = ({ id, author, text, kids }: CommentItemPropsType) => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStateType) => state.SubCommnets);

    const [subComments, setSubCommnets] = useState([]);
    const [subCommentsModal, setSubCommentsModal] = useState(false);
    const subStateComments = state.subComments;

    useEffect(() => {
        setSubCommnets(subStateComments.get(id));
    }, [state, id, setSubCommnets, subStateComments]);


    const getSubComments = (kids: Array<number> = []) => {
        if (!subStateComments.get(id)) {
            dispatch(getSubCommentsThunk(kids, id));
            setSubCommentsModal(true);
        } else {
            setSubCommentsModal(!subCommentsModal);
        }
    }

    return (
        <Styled.StyledMainWrapper>
            <Styled.StyledWrapper>
                <Styled.UserWrapper>
                    <   Styled.StyledUser />
                    <Styled.StyledUserName>{author}</Styled.StyledUserName>
                </Styled.UserWrapper>
                <Styled.StyledMessageWrapper>
                    <Styled.StyledMessage>{text}</Styled.StyledMessage>
                </Styled.StyledMessageWrapper>
                {!state.isFetching ?
                    (kids.length ?
                        (!subCommentsModal ? <Styled.StyledDownArrow onClick={() => getSubComments(kids)} />
                            : <Styled.StyledUpArrow onClick={() => getSubComments()} />)
                        : <div />)
                    : <SubLoader />}
            </Styled.StyledWrapper>
            {subComments && subCommentsModal
                ? subComments.map((element: any) =>
                    <SubCommentItem
                        level={element.level}
                        author={element.author}
                        text={element.text}
                        key={element.text + element.author + element.level + Math.random()}
                    />)
                : <div />}
        </Styled.StyledMainWrapper>
    )
}

export default CommentItem;