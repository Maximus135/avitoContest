import React, { useEffect, useState } from 'react';
import NewsHeader from '../NewsHeader/NewsHeader';
import * as Styled from './MainPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsThunk } from '../../redux/thunks/getNewsThunk';
import { AppStateType } from '../../redux/store';
import Loader from '../Loader/Loader';
import { NewsType } from '../../types/types';
import SubLoader from '../SubLoader/SubLoader';
import { clearNewsItemAction } from '../../redux/actions/GetNewsItemAction';



const MainPage = () => {

    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch();

    const [newsArray, setNewsArray] = useState([]);
    const news = state.news;
    const showDropDownArrow = !state.isFetching && news.length < 100;

    const getMoreNews = () => {
        dispatch(getNewsThunk());
    }

    useEffect(() => {
        const update = setInterval(() => dispatch(getNewsThunk(true)), 60000);
        return () => clearInterval(update);
    }, [dispatch]);

    useEffect(() => {
        if (!news.length) {
            dispatch(getNewsThunk());
        }
        dispatch(clearNewsItemAction());
    }, [news, dispatch]);


    useEffect(() => {
        setNewsArray(news.map((element: NewsType) => {
            const normalDate = new Date(0);
            normalDate.setUTCSeconds(element.date);
            return (
                <Styled.StyledLink to={{ pathname: `/news/${element.id}` }} key={element.id + element.author + Math.random()}>
                    <NewsHeader
                        id={element.id}
                        title={element.title}
                        rating={element.rating}
                        author={element.author}
                        date={normalDate.toLocaleDateString()} />
                </Styled.StyledLink>
            )
        }));
    }, [state, news]);


    if (state.isFetching && !news.length) {
        return <Loader />
    }

    return (
        <Styled.StyledMainPage>
            <Styled.StyledWrapper>
                <Styled.StyledTitel>Hacker News</Styled.StyledTitel>
                <Styled.StyledLogo />
            </Styled.StyledWrapper>
            <Styled.StyledRefresh onClick={() => dispatch(getNewsThunk(true))} />
            {newsArray.map((element) => (element))}
            {(showDropDownArrow) && <Styled.StyledDownArrow onClick={getMoreNews} />}
            {(state.isFetching && news.length) && <SubLoader />}
        </Styled.StyledMainPage>)

}

export default MainPage;