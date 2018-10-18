import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

export default compose(applyMiddleware(promise))(createStore)(root);
