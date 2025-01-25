import Avatar from './Avatar.jsx';

const Navigation = ({ user, changeAvatar }) => {
  return (
    <div className={'nav'}>
      <Avatar size={'small'} user={user} changeAvatar={changeAvatar} />
    </div>
  );
};

export default Navigation;
