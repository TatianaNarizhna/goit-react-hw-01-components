import React from 'react';
import s from './Friend-list.module.css';

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={s.item}>
      <span className={[s.status, isOnline ? s.true : s.false].join(' ')} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendItem;
