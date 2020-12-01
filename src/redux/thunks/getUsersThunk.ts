import { NewsType } from './../../types/types';
import {GetLastId, GetNews} from '../../API/getNews';
import {getNewsAction, waitingNewsAction} from '../actions/GetNewsActions';

export const getUsersThunk = async (dispatch: any) =>{
    dispatch(waitingNewsAction());
    let news: Array<NewsType> = [];
    let lastId = await GetLastId().then(responce=>{
        return responce;
    })

    let newsItem = await GetNews(lastId).then(responce=>{
        return {
            title: responce.title,
            rating: responce.score,
            author: responce.by,
            date: responce.time
        }
    })
    
    news.push(newsItem);
    dispatch(getNewsAction(news))
}