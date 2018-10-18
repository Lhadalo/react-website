import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import promise from 'redux-promise';

export default compose(applyMiddleware(promise))(createStore)(root);
