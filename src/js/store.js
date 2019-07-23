import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

export default createStore(root, applyMiddleware(thunk));
// export default compose(applyMiddleware(promise))(createStore)(root);
