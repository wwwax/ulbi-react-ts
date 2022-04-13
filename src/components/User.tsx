import { FC } from "react";

interface UserProps {
  id: string;
  name: string;
  age: number;
  married: boolean;
}

const User: FC<UserProps> = ({ id, name, age, married }) => {
  return (
    <div>
      <div>
        ID: {id}
      </div>
      <div>
        Name: <span className="uppercase">{name}</span>
      </div>
      <div>
        Age: {age}
      </div>
      <div>
        Married: {JSON.stringify(married)}
      </div>
    </div>
  )
}

export default User;
