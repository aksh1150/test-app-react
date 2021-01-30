import React, { Component } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { getPatients } from "./services";

import Practitioner from "./components/Practitioner/Practitioner";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

class App extends Component {
  componentDidMount() {
    getPatients().then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Practitioner />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
