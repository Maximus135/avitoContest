import React, {useEffect, useState} from 'react';
import NewsHeader from '../NewsHeader/NewsHeader';
import * as Styled from './MainPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import {getNewsThunk} from '../../redux/thunks/getNewsThunk';
import {AppStateType} from '../../redux/store';
import Loader from '../Loader/Loader';
import { NewsType } from '../../types/types';
import SubLoader from '../SubLoader/SubLoader';




const MainPage = () => {

    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch();

    const [newsArray, setNewsArray] = useState([]);

    const getMoreNews = () =>{
        dispatch(getNewsThunk());
    }

    useEffect(() => {
        if(!state.news.length){
            dispatch(getNewsThunk());
        }
        // setInterval(()=>dispatch(getNewsThunk(true)),60000);
    },[state.news]);

    useEffect(() => {
        setNewsArray(state.news.map((element:NewsType)=>{
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
                <Styled.StyledTitel>Hacker News</Styled.StyledTitel>
                <Styled.StyledLogo />
        </Styled.StyledWrapper>
        <Styled.StyledRefresh onClick={()=>dispatch(getNewsThunk(true))}/>
        {newsArray.map((element)=>(element))}
        {(!state.isFetching && state.news.length && state.news.length < 100) && <Styled.StyledDownArrow onClick={getMoreNews} />}
        {(state.isFetching && state.news.length) && <SubLoader />}
        </Styled.StyledMainPage>)

}

export default MainPage;