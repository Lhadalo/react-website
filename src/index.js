import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import Navigation from './components/navigation_bar/navigation';
import App from './components/app';
import PostsIndex from './components/posts/posts_index';
import PostsShow from './components/posts/posts_show';
import Photos from './components/photos/photos';
import PhotosShow from './components/photos/photos_show';
import Projects from './components/projects/projects_page';
import Contact from './components/contact/contact_page';
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
						<Route path="/photos/:id" component={PhotosShow} />
						<Route path="/photos" component={Photos} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</div>
		</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.app'));
