import UserList from "./components/UserList";
import { IUser } from "./types/types";

export default function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: "Adam",
      email: "adam@mail.com",
      address: {
        street: "Legockogo",
        city: "Uzhhorod",
        zipcode: "2800",
      }
    },
    {
      id: 2,
      name: "Carl",
      email: "carl@mail.com",
      address: {
        street: "Tlekhasa",
        city: "Uzhhorod",
        zipcode: "2800",
      }
    },
    {
      id: 3,
      name: "David",
      email: "dav@mail.com",
      address: {
        street: "Halana",
        city: "Uzhhorod",
        zipcode: "2800",
      }
    }
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};
