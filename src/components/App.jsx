import Profile from './Profile/Profile';
import userData from '../data/userData.json'
import '../components/App.css'

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
    </>
  );
};

export default App
