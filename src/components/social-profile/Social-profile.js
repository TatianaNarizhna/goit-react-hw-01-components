import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../static/default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
