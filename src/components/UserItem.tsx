import { FC } from 'react'
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className="border border-black p-5 mb-5 last:mb-0">
      {user.id} {user.name} live in {user.address.city} city, {user.address.street} street.
    </div>
  );
}

export default UserItem;
