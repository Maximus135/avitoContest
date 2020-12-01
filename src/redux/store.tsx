import {combineReducers, createStore, applyMiddleware, Action} from "redux";
import GetNewsReducer from './reducers/GetUsersReducer';
import thunk, {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({
    News: GetNewsReducer
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType


export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;