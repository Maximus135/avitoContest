import React, {useEffect, useState} from 'react';
import NewsHeader from '../NewsHeader/NewsHeader';
import * as Styled from './MainPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import {getNewsThunk} from '../../redux/thunks/getNewsThunk';
import {AppStateType} from '../../redux/store';
import Loader from '../Loader/Loader';
import { NewsType } from '../../types/types';




const MainPage = () => {

    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch();

    const [newsArray, setNewsArray] = useState([]);

    const getMoreNews = () =>{
        dispatch(getNewsThunk);
    }

    useEffect(() => {
        if(!state.news.length){
            dispatch(getNewsThunk);
        }
    },[state.news]);

    useEffect(() => {
        let sortedNews = state.news.sort((first:NewsType, second:NewsType)=>(second.date-first.date));
        setNewsArray(sortedNews.map((element:NewsType)=>{
            let normalDate = new Date(0);
            normalDate.setUTCSeconds(element.date);
            return(
                <Styled.StyledLink to={{pathname: `/news/${element.id}`}}>
                    <NewsHeader
                        id={element.id} 
                        title={element.title}
                        rating={element.rating}
                        author={element.author}
                        date={normalDate.toLocaleDateString()} />
                </Styled.StyledLink>
                )
        }));
    },[state]);
    

    if(state.isFetching && !state.news.length){
        return <Loader />
    }
    return( 
        <Styled.StyledMainPage>
            <Styled.StyledWrapper>
                <Styled.StyledTitel onClick={getMoreNews}>Hacker News</Styled.StyledTitel>
                <Styled.StyledLogo />
        </Styled.StyledWrapper>
        {newsArray.map((element)=>(element))}
        {(state.isFetching && state.news.length) && <span>подргужаююю...</span>}
        </Styled.StyledMainPage>)

}

export default MainPage;