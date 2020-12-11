import React, { useState, useEffect } from 'react';
import * as Styled from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import Loader from '../Loader/Loader';
import Comments from '../Comment/Comments';
import { getNewsItemThunk } from '../../redux/thunks/getNewsItemThunk';
import { clearSubCommentsAction } from '../../redux/actions/GetSubCommentsAction';
import { clearRootCommentsAction } from '../../redux/actions/GetRootCommentsAction';
import { getRootCommentsThunk } from '../../redux/thunks/getRootCommentsThunk';

const NewsPage = (props: any) => {

    const state = useSelector((state: AppStateType) => state.NewsItem);
    const check = useSelector((state: AppStateType) => state);

    const dispatch = useDispatch();
    const newsId = props.match.params.newsId;

    const [rootCommentsId, setrootCommentsId] = useState([]);
    const [commentsCounter, setCommentsCounter] = useState(0);
    const [date, setDate] = useState('');

    const fullUpdateNews = () => {
        setrootCommentsId([]);
        setCommentsCounter(0);
        dispatch(getNewsItemThunk(newsId));
        dispatch(clearSubCommentsAction());
        dispatch(clearRootCommentsAction());
        dispatch(getRootCommentsThunk([], true));
    }

    const goToNewsSite = (link: string) => {
        window.open(link, 'newLink');
    }

    console.log(check);

    useEffect(() => {
        if (!state.newsItem.comments) {
            dispatch(getNewsItemThunk(newsId));
        }
        // setInterval(fullUpdateNews, 60000);
    }, [dispatch, newsId, state.newsItem.comments]);


    useEffect(() => {
        if (state.newsItem.subCommentsId) {
            setrootCommentsId(state.newsItem.subCommentsId);
        }
        setCommentsCounter(state.newsItem.commentsCounter);
        const normalDate = new Date(0);
        normalDate.setUTCSeconds(state.newsItem.date);
        const dateToString = normalDate.toLocaleDateString();
        setDate(dateToString);
    }, [state.newsItem]);


    if (state.isFetching) {
        return <Loader />
    }

    return (
        <Styled.StyledNewsPage>
            <Styled.StyledHeader>
                <Styled.StyledLink to='/'><Styled.StyledBack /></Styled.StyledLink>
                <Styled.StyledTitle>{state.newsItem.title}</Styled.StyledTitle>
            </Styled.StyledHeader>
            <Styled.StyledContent>
                <Styled.StyledWrapper>
                    <Styled.StyledLinkIcon />
                    <Styled.StyledTextLink onClick={() => goToNewsSite(state.newsItem.link)}>Click Me</Styled.StyledTextLink>
                </Styled.StyledWrapper>
                <Styled.StyledWrapper>
                    <Styled.StyledDate />
                    <Styled.StyledText>{date}</Styled.StyledText>
                </Styled.StyledWrapper>
                <Styled.StyledWrapper>
                    <Styled.StyledUser />
                    <Styled.StyledText>{state.newsItem.author}</Styled.StyledText>
                </Styled.StyledWrapper>
                <Styled.StyledWrapper>
                    <Styled.StyledCounter />
                    <Styled.StyledText>{commentsCounter}</Styled.StyledText>
                </Styled.StyledWrapper>
                <Styled.StyledCommentsTitle>Comments</Styled.StyledCommentsTitle>
                <Comments commentsId={rootCommentsId} fullUpdateNews={fullUpdateNews} />
            </Styled.StyledContent>
        </Styled.StyledNewsPage>)
};

export default NewsPage;