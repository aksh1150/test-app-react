import React, { Component } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { getPatients } from "./services";

import Practitioner from "./components/Practitioner/Practitioner";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
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
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            //
          }}
        >
          <Practitioner />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
