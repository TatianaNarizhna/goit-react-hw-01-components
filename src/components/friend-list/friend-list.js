import React from 'react';
import PropTypes from 'prop-types';
import s from './Friend-list.module.css';
import defaultImg from '../static/default.jpg';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline = true }) => (
        <li key={id} className={s.item}>
          <span
            className={[s.status, isOnline ? s.true : s.false].join(' ')}
          ></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
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
      isOnline: PropTypes.oneOf([true, false]),
    }),
  ).isRequired,
};

// FriendList.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }
