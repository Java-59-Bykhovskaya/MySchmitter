import { useContext } from 'react';
import { TwitterContext } from '../utils/context';

const Avatar = ({ size }) => {
  const { user, changeAvatar, changeName } = useContext(TwitterContext);

  const response = () => {
    const newUrl = prompt('Enter url of new avatar');
    changeAvatar(newUrl);
  };

  return (
    <img
      onContextMenu={(e) => {
        e.preventDefault();
        const newName = prompt('Enter new name');
        changeName(newName);
      }}
      onClick={response}
      className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
    />
  );
};

export default Avatar;
