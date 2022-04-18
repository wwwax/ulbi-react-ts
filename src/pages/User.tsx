import axios from "axios";
import { FC, useState, useEffect } from "react";
import { IUser } from "../types";
import { useParams, useHistory } from "react-router-dom";

interface UserProps {
  id: string;
}

const User: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const params = useParams<UserProps>();

  const history = useHistory();

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setUser(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="border border-gray-300">
      <button
        className="uppercase border-2 border-gray-400 bg-orange-400 p-5"
        onClick={() => history.push("/users")}
      >
        back
      </button>

      <h1>
        User Name: {user?.name}
      </h1>

      <div>
        User Email: {user?.email}
      </div>
    </div>
  );
}

export default User;
