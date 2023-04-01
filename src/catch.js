
import React from "react";
import Error from "./components/error";
import Header from "./components/header";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false , errorMessage : "", errorInfo : "" };

    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true, errorMessage : error, errorInfo : info });
    }
    render() {
      if (this.state.hasError) {
        return <div><Error></Error></div>
      }
      return this.props.children;
    }
  }
  export default ErrorBoundary;