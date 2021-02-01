import {createStore, combineReducers} from 'redux';
import {restReducer} from './reducers/rests';

const rootReducer = combineReducers({
  rest: restReducer,
});

export default createStore(rootReducer);
