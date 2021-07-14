import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="row mt-1 mb-3">
      <ul className="nav shadow p-4 nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/expanses" activeClassName="active">
            Expanses
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
