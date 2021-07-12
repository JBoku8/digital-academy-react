import PropTypes from "prop-types";

export const RegisterForm = ({ title, maxAttempts }) => {
  return (
    <>
      <div className="col-12">
        <h2 className="text-success">{title}</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

RegisterForm.defaultProps = {
  title: "რეგისტრაციის ფორმა",
  maxAttempts: 3,
};

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  maxAttempts: PropTypes.number.isRequired,
};
