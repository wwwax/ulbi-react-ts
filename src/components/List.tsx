import { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return (
    <div className="p-5">
      {props.items.map(props.renderItem)}
    </div>
  );
}
