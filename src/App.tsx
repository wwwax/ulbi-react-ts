import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Todos from "./pages/Todos";
import User from "./pages/User";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-gray-300 flex justify-center py-5">
          <NavLink className="uppercase mx-2" to="/users">users</NavLink>
          <NavLink className="uppercase mx-2" to="/todos">todos</NavLink>
        </div>

        <Route path="/todos" exact>
          <Todos />
        </Route>

        <Route path="/users" exact>
          <Users />
        </Route>

        <Route path="/users/:id">
          <User />
        </Route>
      </div>
    </BrowserRouter>
  );
};
