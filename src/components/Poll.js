import React, { Component } from 'react';
import { connect } from 'react-redux';
class Poll extends Component {
  render() {
    return (
      <div className='poll-container'>
        Poll View
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, polls }, { match }) {
  //second argument to mapStateToProps is any props passed to the component we are connecting
  const { id } = match.params;
  const poll = polls[id];
  if (!poll) {
    return {
      poll: null
    };
  }
  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }
    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    avatarURL: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(Poll);
