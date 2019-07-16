import { combineReducers, createStore } from 'redux';

import reducer from './reducer'

const AppReducers = combineReducers({
    reducer,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(rootReducer);

export default store;
