import React,{useState, useEffect} from 'react';
import * as Styled from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/store';
import Loader from '../Loader/Loader';
import Comments from '../Comment/Comments';
import {getNewsItemThunk} from '../../redux/thunks/getNewsItemThunk';
import { NewsItemType } from '../../types/types';

const NewsPage = (props:any) =>{

    const state = useSelector((state: AppStateType) => state.NewsItem);
    const dispatch = useDispatch();

    const [rootCommentsId, setrootCommentsId] = useState([]);

    const goToNewsSite = (link: string) =>{
        console.log(link);
        window.open(link,'newLink');
    }

    useEffect(() => {
        const newsId = props.match.params.newsId;
        dispatch(getNewsItemThunk(newsId));
    },[]);

    useEffect(() => {
        if(state.newsItem.subCommentsId){
            setrootCommentsId(state.newsItem.subCommentsId);
        }
    },[state.newsItem]);


    if(state.isFetching){
        return <Loader />
    }
    
return (
    <Styled.StyledNewsPage>
        <Styled.StyledHeader>
            <Styled.StyledLink to ='/'><Styled.StyledBack /></Styled.StyledLink>
            <Styled.StyledTitle>{state.newsItem.title}</Styled.StyledTitle>
            <Styled.StyledRefresh />
        </Styled.StyledHeader>
        <Styled.StyledContent>
            <Styled.StyledWrapper>
                <Styled.StyledLinkIcon />
                <Styled.StyledTextLink onClick={()=>goToNewsSite(state.newsItem.link)}>Click Me</Styled.StyledTextLink> 
            </Styled.StyledWrapper>
            <Styled.StyledWrapper>
                <Styled.StyledDate />
                <Styled.StyledText>{state.newsItem.date}</Styled.StyledText> 
            </Styled.StyledWrapper>
            <Styled.StyledWrapper>
                <Styled.StyledUser />
                <Styled.StyledText>{state.newsItem.author}</Styled.StyledText> 
            </Styled.StyledWrapper>
            <Styled.StyledWrapper>
                <Styled.StyledCounter />
                <Styled.StyledText>{state.newsItem.commentsCounter}</Styled.StyledText> 
            </Styled.StyledWrapper>
            <Styled.StyledCommentsTitle>Comments</Styled.StyledCommentsTitle>
            <Comments commentsId={rootCommentsId} />
        </Styled.StyledContent>
    </Styled.StyledNewsPage>)


};

export default NewsPage;