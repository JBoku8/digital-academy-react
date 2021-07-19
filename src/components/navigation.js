import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const Navigation = () => {
  const { loggedIn } = useUserContext();

  return (
    <div className="row mt-1 mb-3">
      <ul className="nav shadow p-4 nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>

        {!loggedIn ? (
          <>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
          </>
        ) : null}

        {loggedIn ? (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/expanses"
              activeClassName="active"
            >
              Expanses
            </NavLink>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
