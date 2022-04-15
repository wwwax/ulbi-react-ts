import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import { IUser, ITodo } from "./types/types";
import { useState, useEffect } from 'react';
import axios from "axios";
import List from "./components/List";

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function fetchUsers() {
    try {
      const response = await
        axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  async function fetchTodos() {
    try {
      const response = await
        axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
      setTodos(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />

      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};
