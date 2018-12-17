import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPercentage } from '../utils/helpers';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];
class Poll extends Component {
  handleAnswer = (answer) => {
    this.answered = true;
    const { authedUser, poll } = this.props;
    console.log(`add answer!`);
  };
  render() {
    if (this.props.poll === null) {
      return <h1>Cannot locate this poll</h1>;
    }
    const { vote, poll, authorAvatar } = this.props;
    const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);

    return (
      <div className='poll-container'>
        <h1 className='question'>{poll.question}</h1>
        <div className='poll-author'>
          By: <img src={authorAvatar} alt={`avatar for ${this.props.authedUser}`} />
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map((question, key) => {
            const count = poll[question[0] + 'Votes'].length;
            return (
              <li
                className={`option ${vote === question[0] ? 'chosen' : ''}`}
                onClick={() => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0]);
                  }
                }}>
                {vote === null ? (
                  poll[question]
                ) : (
                  <div className='result'>
                    <span>{poll[question]}</span>
                    <span>
                      {getPercentage(count, totalVotes)}% ({count})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
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
  const vote = getVoteKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }
    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(Poll);
