import { LoginForm } from "../../components/forms";

export const Login = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="d-flex col-6 flex-column">
        <div className="col-12 mt-3">
          <pre>
            {JSON.stringify(
              {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
              },
              null,
              2
            )}
          </pre>
        </div>
        <div className="col-12">
          <LoginForm title="სისტემაში შესვლა" />
        </div>
      </div>
    </div>
  );
};

export default Login;
