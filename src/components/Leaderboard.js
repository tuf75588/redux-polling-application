import React from 'react';
import { connect } from 'react-redux';
const Leaderboard = ({ users }) => {
  console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li className='user'>
            <img src={user.avatarURL} alt={`avatar for ${user.name}`} />
            <div>
              <h1>{user.name}</h1>
              <p>{user.polls} Polls</p>
              <p>{user.answers} Answers</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, polls, answers } = users[id];
        return {
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
  };
}

export default connect(mapStateToProps)(Leaderboard);
