const Avatar = ({ size, user, changeAvatar }) => {
  const response = () => {
    const newUrl = prompt('Enter url of new avatar');
    changeAvatar(newUrl);
  };

  return (
    <img
      onClick={response}
      className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
    />
  );
};

export default Avatar;
