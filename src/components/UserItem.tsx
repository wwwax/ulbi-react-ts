import { FC } from 'react'
import { IUser } from '../types';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div className="border border-black p-5 mb-5 last:mb-0" onClick={() => onClick(user)}>
      {user.id} {user.name} live in {user.address.city} city,
      {user.address.street} street.
    </div>
  );
}

export default UserItem;