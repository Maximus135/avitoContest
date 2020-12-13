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
import { getSubCommentsThunk } from '../../redux/thunks/getSubCommentsThunk';

const NewsPage = (props: any) => {

    const state = useSelector((state: AppStateType) => state.NewsItem);
    const dispatch = useDispatch();

    const [rootCommentsId, setrootCommentsId] = useState([]);
    const [commentsCounter, setCommentsCounter] = useState(0);
    const [date, setDate] = useState('');
    const newsItem = state.newsItem;

    const newsId = props.match.params.newsId;

    const fullUpdateNews = () => {
        setrootCommentsId([]);
        setCommentsCounter(0);
        dispatch(getNewsItemThunk(newsId));
        dispatch(clearSubCommentsAction());
        dispatch(clearRootCommentsAction());
        dispatch(getRootCommentsThunk([], true));
        dispatch(getSubCommentsThunk([], 0, true));
    }

    const goToNewsSite = (link: string) => {
        window.open(link, 'newLink');
    }

    useEffect(() => {
        fullUpdateNews();
        const update = setInterval(fullUpdateNews, 60000);
        return () => clearInterval(update);
    }, []);


    useEffect(() => {
        if (newsItem.subCommentsId) {
            setrootCommentsId(newsItem.subCommentsId);
        }
        setCommentsCounter(newsItem.commentsCounter);
        const normalDate = new Date(0);
        normalDate.setUTCSeconds(newsItem.date);
        const dateToString = normalDate.toLocaleDateString();
        setDate(dateToString);
    }, [newsItem]);


    if (state.isFetching) {
        return <Loader />
    }

    return (
        <Styled.StyledNewsPage>
            <Styled.StyledHeader>
                <Styled.StyledLink to='/'><Styled.StyledBack /></Styled.StyledLink>
                <Styled.StyledTitle>{newsItem.title}</Styled.StyledTitle>
            </Styled.StyledHeader>
            <Styled.StyledContent>
                <Styled.StyledWrapper>
                    <Styled.StyledLinkIcon />
                    <Styled.StyledTextLink onClick={() => goToNewsSite(newsItem.link)}>Click Me</Styled.StyledTextLink>
                </Styled.StyledWrapper>
                <Styled.StyledWrapper>
                    <Styled.StyledDate />
                    <Styled.StyledText>{date}</Styled.StyledText>
                </Styled.StyledWrapper>
                <Styled.StyledWrapper>
                    <Styled.StyledUser />
                    <Styled.StyledText>{newsItem.author}</Styled.StyledText>
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