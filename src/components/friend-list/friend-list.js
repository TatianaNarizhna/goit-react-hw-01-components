import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../static/default.jpg';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <span>{isOnline}</span>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.defaultProps = {
  avatar: defaultImg,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

// FriendList.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }
