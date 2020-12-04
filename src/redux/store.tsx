import {combineReducers, createStore, applyMiddleware, Action} from "redux";
import GetNewsReducer from './reducers/GetNewsReducer';
import GetNewsItemReducer from './reducers/GetNewsItemReducer';
import GetRootCommentsReducer from './reducers/GetrootCommentsReducer';
import thunk, {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({
    News: GetNewsReducer,
    NewsItem: GetNewsItemReducer,
    RootComments: GetRootCommentsReducer
})

type RootReducerType = typeof rootReducer;


export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;