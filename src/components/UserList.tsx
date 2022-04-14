import { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="m-5">
      {
        users.map(user => (
          <div
            className="border border-black p-5 mb-5 last:mb-0"
            key={user.id}
          >
            <div>
              {user.id} {user.name} live in {user.address.city} city, {user.address.street} street.
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default UserList;
