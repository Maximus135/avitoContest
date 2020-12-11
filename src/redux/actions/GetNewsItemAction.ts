import { NewsItemType } from '../../types/types'


export const GET_ITEM_NEWS = 'GET_ITEM_NEWS';
export const WAITING_ITEM_NEWS = 'WAITING_ITEM_NEWS';

export const getNewsItemAction = (newsItem: NewsItemType) => (
    {
        type: GET_ITEM_NEWS,
        newsItem: newsItem
    }
);

export const waitingNewsItemAction = () => (
    { type: WAITING_ITEM_NEWS }
);