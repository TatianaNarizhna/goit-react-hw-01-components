import React from 'react';
import Profile from './components/social-profile/Social-profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/friend-list';
import user from './data/user.json';
import statisticalData from './data/statistics.json';
import friendListData from './data/friend-list.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList />
    </>
  );
};

export default App;
