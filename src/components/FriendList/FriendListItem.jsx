import clsx from "clsx";
import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.friend}>
            <img
                className={s.friAva}
                src={avatar}
                alt="Avatar"
                width="48" />
            <p className={s.friName}>{name}</p>
            <p className={clsx(s.status, isOnline ? s.green : s.red)}>
                {isOnline ? "Online" : "Offline"}</p>
        </div>);
};
export default FriendListItem;