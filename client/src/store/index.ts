import {serverReducer} from './reducers'
import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    serverCheck: serverReducer
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default function configStore() {
    const middlewares = [thunkMiddleware];
    const middlewaresEnchancers = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewaresEnchancers)
    );

    return store;
}