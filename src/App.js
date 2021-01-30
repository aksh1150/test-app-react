import React, { Component } from "react";
import { getPatients } from "./services";

import Practitioner from "./components/Practitioner/Practitioner";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";

class App extends Component {
  componentDidMount() {
    getPatients().then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <>
        <ErrorBoundary>
          <Practitioner />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
