import { LoginForm } from "../../components/forms";

export const Login = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="d-flex col-6">
        <div className="col-12">
          <LoginForm title="სისტემაში შესვლა" />
        </div>
      </div>
    </div>
  );
};

export default Login;
