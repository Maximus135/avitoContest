import { NewsType } from '../../types/types'

export const GET_NEWS = 'GET_NEWS';
export const WAITING_NEWS = 'WAITING_NEWS';


export const getNewsAction = (news: Array<NewsType>) => (
    {
        type: GET_NEWS,
        news: news
    }
);


export const waitingNewsAction = () => (
    { type: WAITING_NEWS }
);