import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUsers';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users)), dispatch(receivePolls(polls)), dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
