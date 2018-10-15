import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
import PhotosReducer from './reducer_photos';
import PhotosInfoReducer from './reducer_photos_info';
import UsersReducer from './reducer_users';
import CommentsReducer from './reducer_comments';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  photos: PhotosReducer,
  photos_info: PhotosInfoReducer,
  users: UsersReducer,
  form: formReducer
});

export default rootReducer;
