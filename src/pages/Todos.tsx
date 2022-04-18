import { FC, useState, useEffect } from "react";
import axios from "axios";
import { ITodo } from "../types";
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
      setTodos(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default Todos;
