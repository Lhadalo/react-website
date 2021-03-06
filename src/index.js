import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import Navigation from './components/navigation';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
		<div>
			<Navigation />
			<div className="container">	
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/posts/:id" component={PostsShow} />
					<Route path="/posts" component={PostsIndex} />
				</Switch>
			</div>
		</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.app'));
