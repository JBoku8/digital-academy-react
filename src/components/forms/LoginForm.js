import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

import { login } from "../../service/auth";
import { AUTH_TOKEN } from "../../service/auth.constants";
import { setValue } from "../../service/localStorage";
import { useUserContext } from "../../contexts/UserContext";

export const LoginForm = ({ title, maxAttempts }) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();
  const { setLoggedIn } = useUserContext();

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result) {
      setValue(AUTH_TOKEN, result.token);
      setLoggedIn(true);
      const redirectPathname =
        location.state !== "" ? location.state : "/expanses";
      history.replace(redirectPathname);
    }
  };

  return (
    <>
      <div className="col-12">
        <h2 className="text-danger">{title}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            {...register("email", {
              required: true,
            })}
          />
          <div id="email" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            {...register("password", {
              required: true,
            })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

LoginForm.defaultProps = {
  title: "ავტორიზაციის ფორმა",
  maxAttempts: 3,
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  maxAttempts: PropTypes.number.isRequired,
};
