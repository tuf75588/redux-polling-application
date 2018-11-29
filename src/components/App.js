import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
class App extends Component {
  componentDidMount() {
    //! call handleInitialData to get data from our store
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return <div>Starter Code.</div>;
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
    polls: state.polls
  };
}
export default connect(mapStateToProps)(App);
