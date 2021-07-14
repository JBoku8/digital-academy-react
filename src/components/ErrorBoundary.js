import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false, errorInfo: null, error: null };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState((prev) => ({ ...prev, error, errorInfo }));
  }

  resetError = () => {
    this.setState({
      hasError: false,
      errorInfo: null,
      error: null,
    });
  };

  render() {
    const { hasError, errorInfo } = this.state;

    if (hasError) {
      return (
        <div className="container">
          <div className="row">
            <h1 className="text--muted">Oops Something went wrong.</h1>
            <h4 className="text--muted">
              <Link to="/" onClick={this.resetError}>
                Go Back
              </Link>
            </h4>
            <pre>{JSON.stringify(errorInfo, null, 2)}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
