import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
class App extends Component {
  componentDidMount() {
    //! call handleInitialData to get data from our store
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return <div>{this.props.loading ? <h1>Loading...</h1> : <Dashboard />}</div>;
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
