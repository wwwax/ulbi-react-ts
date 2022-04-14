import UserList from "./components/UserList";
import { IUser } from "./types/types";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};
