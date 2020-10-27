import { combineReducers, createStore } from 'redux';
import playersReducer from '../reducers/playersReducer';
import filtersReducer from '../reducers/filtersReducer';


export default () => {
    const store = createStore(
        combineReducers ({
            filters: filtersReducer,
            players: playersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}