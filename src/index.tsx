import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

import { App } from "./App";

const ErrorFallback = () => {
  return <div>Error</div>;
};
ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>,
  document.getElementById("root")
);
