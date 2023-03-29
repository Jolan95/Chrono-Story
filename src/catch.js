
import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false , errorMessage : "", errorInfo : "" };

    }
  
    componentDidCatch(error, info) {
      // Affiche une UI de repli
      this.setState({ hasError: true, errorMessage : error, errorInfo : info });
    }
  
    render() {
      if (this.state.hasError) {
        // Vous pouvez afficher n'importe quelle UI de repli.
        return <h1><span>Une erreur est survenu, veuillez vous déconnecter et vous reconnecter afin que tout refonctionne</span><span>{this.state.errorMessage.message}+ </span></h1>;

      }
      return this.props.children;
    }
  }
  export default ErrorBoundary;