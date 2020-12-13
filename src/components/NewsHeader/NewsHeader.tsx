import React from 'react';
import * as Styled from './NewsHeader.styled'

type NewsHeaderProps = {
    id: number
    title: string
    rating: number
    author: string
    date: string
}

const NewsHeader = ({ title, rating, author, date }: NewsHeaderProps) => (
    <Styled.StyledNewsHeader>
        <Styled.StyledTitle>{title}</Styled.StyledTitle>
        <Styled.StyledInfo>
            <Styled.StyledRatingIcon />
            <Styled.StyledRating>{rating}</Styled.StyledRating>
            <Styled.StyledUserIcon />
            <Styled.StyledUser>{author}</Styled.StyledUser>
            <Styled.StyledDateIcon />
            <Styled.StyledDate>{date}</Styled.StyledDate>
        </Styled.StyledInfo>
    </Styled.StyledNewsHeader>
)

export default NewsHeader;