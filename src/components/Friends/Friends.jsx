import friends from '../../data/friends.json';
import PropTypes from 'prop-types';
import s from './StyleFriend.module.css';
function Friends({ avatar, name, isOnline, id }) {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <li className={s.item} key={el.id}>
          <span className={el.isOnline ? s.online : s.offline}></span>
          <img
            className={s.avatar}
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default Friends;
