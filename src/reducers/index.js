import { combineReducers } from 'redux';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import polls from './polls';
export default combineReducers({
  loadingBar: loadingBarReducer,
  users,
  polls,
  authedUser
});
