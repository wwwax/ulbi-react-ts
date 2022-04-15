import { FC } from 'react';
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="border border-black p-5 mb-5 last:mb-0">
      <input
        className='mr-2'
        checked={todo.completed} type="checkbox" />
      <span>{todo.id} {todo.title}</span>
    </div>
  )
};

export default TodoItem;
