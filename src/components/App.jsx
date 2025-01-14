import '../components/App.jsx'
import userData from '../data/userData.json'
import friends from '../data/friends.json'

import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
    </>
  );
};

export default App
