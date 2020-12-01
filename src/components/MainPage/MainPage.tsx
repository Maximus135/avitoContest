import React, {useEffect} from 'react';
import NewsHeader from '../NewsHeader/NewsHeader';
import * as Styled from './MainPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import {getUsersThunk} from '../../redux/thunks/getUsersThunk';
import {AppStateType} from '../../redux/store';

const MainPage = (props:any) => {

    const news = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch();
    console.log(news);

    useEffect(() => {
        dispatch(getUsersThunk);
    },[]);
    
    return news.news.length ? (
        <Styled.StyledMainPage>
        <Styled.StyledWrapper>
            <Styled.StyledTitel>Hacker News</Styled.StyledTitel>
            <Styled.StyledLogo />
        </Styled.StyledWrapper>
    <NewsHeader title={`One of biology's biggest mysteries 'largely solved' by AI'`} rating={123} author='Maxim' date='30.11.20'/>
    <NewsHeader title={`One of biology's biggest mysteries 'largely solved' by AI'`} rating={123} author='Maxim' date='30.11.20'/>
    <NewsHeader title={`One of biology's biggest mysteries 'largely solved' by AI'`} rating={123} author='Maxim' date='30.11.20'/>
    <NewsHeader title={`One of biology's biggest mysteries 'largely solved' by AI'`} rating={123} author='Maxim' date='30.11.20'/>
    <NewsHeader title={`One of biology's biggest mysteries 'largely solved' by AI'`} rating={123} author='Maxim' date='30.11.20'/>
    </Styled.StyledMainPage>): <div>Loading</div>

}

export default MainPage;