import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend-list/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistics.json';
import friends from './data/friend-list.json';
import transactions from './data/transaction.json';

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
