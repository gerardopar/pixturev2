// importing modules
import {
 createStore, combineReducers, applyMiddleware, compose 
} from 'redux';
import thunk from 'redux-thunk';

// importing reducer
import homePageReducer from '../reducers/homePageReducer';
import searchPageReducer from '../reducers/searchPageReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating the redux store: 
export default () => {
    const store = createStore(combineReducers({
        home: homePageReducer,
        searchPage: searchPageReducer
        }),
        composeEnhancers(applyMiddleware(thunk)));

    return store;
};
