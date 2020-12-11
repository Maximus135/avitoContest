import { NewsItemType } from './../../types/types';
import { getNewsItemAction, waitingNewsItemAction } from '../actions/GetNewsItemAction';
import { GetNews } from '../../API/getNews';


export const getNewsItemThunk = (id: number) => (async (dispatch: any) => {
    dispatch(waitingNewsItemAction());

    const newsId = id;
    let newsItem: NewsItemType = {
        id: 0,
        link: '',
        title: '',
        date: 0,
        author: '',
        commentsCounter: 0,
        subCommentsId: []
    };

    newsItem = await GetNews(newsId).then(responce => {
        return {
            id: responce.id,
            link: responce.url,
            title: responce.title,
            date: responce.time,
            author: responce.by,
            commentsCounter: responce.kids ? responce.kids.length : 0,
            subCommentsId: responce.kids ? responce.kids : []
        }
    })

    dispatch(getNewsItemAction(newsItem));

})