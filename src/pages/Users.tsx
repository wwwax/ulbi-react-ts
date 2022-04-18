import axios from "axios";
import { FC, useState, useEffect } from "react";
import { IUser } from '../types';
import List from '../components/List';
import UserItem from '../components/UserItem';
import { useHistory } from "react-router-dom";

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem
        user={user}
        key={user.id}
        onClick={(user) => { history.push(`/users/${user.id}`) }} />}
    />
  );
};

export default Users;
