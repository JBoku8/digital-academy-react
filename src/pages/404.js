import { Link } from "react-router-dom";

export const NotFound = () => {
  // throw new SyntaxError("BLA BLA BLA");
  return (
    <div className="row">
      <h1>Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};
