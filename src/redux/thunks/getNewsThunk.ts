import { NewsType } from '../../types/types';
import { GetLatestNewsId, GetNews } from '../../API/getNews';
import { getNewsAction, waitingNewsAction } from '../actions/GetNewsActions';

const news: Array<NewsType> = [];
let latestNewsId: Array<number> = [];
let savedId = 0;
export const getNewsThunk = (fullUpdate: boolean = false) => (async (dispatch: any) => {
    dispatch(waitingNewsAction());
    if (fullUpdate) {
        savedId = 0;
        latestNewsId.length = 0;
        news.length = 0;
    }
    if (savedId === 0) {
        latestNewsId = await GetLatestNewsId().then(responce => {
            return responce;
        })
    }
    for (let i = savedId; i < savedId + 10; i++) {
        const newsItem = await GetNews(latestNewsId[i]).then(responce => {
            return {
                id: responce.id,
                title: responce.title,
                rating: responce.score,
                author: responce.by,
                date: responce.time,
                type: responce.type
            }
        }).catch((error) => {
            return {
                id: 0,
                title: '',
                rating: 0,
                author: '',
                date: 0,
                type: ''
            }
        })
        if (newsItem.id !== 0) {
            news.push(newsItem);
        }
    }
    savedId += 10;
    dispatch(getNewsAction(news))
});