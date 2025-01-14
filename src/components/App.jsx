import Profile from './Profile/Profile';
import userData from '../data/userData.json'
import '../components/App.css'
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        status={userData.status}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App
