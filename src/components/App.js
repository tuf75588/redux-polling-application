import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
class App extends Component {
  componentDidMount() {
    //! call handleInitialData to get data from our store
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading ? null : (
              <div>
                <Route exact path='/' component={Dashboard} />
                <Route path='/add' component={AddPoll} />
                <Route path='/polls/:id' component={Poll} />
                <Route path='/leaderboard' component={Leaderboard} />
              </div>
            )}
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
