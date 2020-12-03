import React,{useState, useEffect} from 'react';
import * as Styled from './NewsPage.styled';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/store';
import Loader from '../Loader/Loader';
import { NewsItemType } from '../../types/types';
import {getNewsItemThunk} from '../../redux/thunks/getNewsItemThunk';

const NewsPage = (props:any) =>{

    const state = useSelector((state: AppStateType) => state);
    const dispatch = useDispatch();
    console.log(state);
    // useEffect(() => {
    //     const newsId = props.match.params.newsId;
    //     if(Object.keys(state.newsItem).length === 0){
    //         dispatch(getNewsItemThunk(newsId));
    //     }
    // },[state.newsItem]);

return <div></div>

};

export default NewsPage;