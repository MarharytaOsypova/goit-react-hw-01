import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.item}>
      {friends.map((friend) => (
        <li className={styles.list} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

