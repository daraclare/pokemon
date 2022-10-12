import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = () => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    console.warn("Error:", info.componentStack);
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children, fallback_message } = this.props;
    return hasError ? (
      <p>{fallback_message || "Error, please refresh"}</p>
    ) : (
      children
    );
  }
}

ErrorBoundary.propTypes = {
  fallback_message: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ErrorBoundary;
