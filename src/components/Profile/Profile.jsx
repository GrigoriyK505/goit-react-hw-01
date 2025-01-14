import s from './Profile.module.css'
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={s.container}>
            <div className={s.useInfo}>
                <img
                    className={s.ava}
                    src={image}
                    alt="User avatar"
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.loc}>{location}</p>
            </div>

            <ul className={s.active}>
                <li className={s.setActive}>
                    <span className={s.tit}>Followers</span>
                    <span className={s.stats}>{stats.followers}</span>
                </li>
                <li className={s.setActive}>
                    <span className={s.tit}>Views</span>
                    <span className={s.stats}>{stats.views}</span>
                </li>
                <li className={s.setActive}>
                    <span className={s.tit}>Likes</span>
                    <span className={s.stats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;    