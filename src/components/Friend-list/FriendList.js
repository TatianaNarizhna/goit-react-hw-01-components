import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';
import s from './Friend-list.module.css';
import defaultImg from '../static/default.jpg';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline = true }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
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
      isOnline: PropTypes.oneOf([true, false]),
    }),
  ).isRequired,
};

// FriendList.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }
