import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// Three lazy boundaries that all import the *same* lodash CJS subpaths.
// rolldown will extract the shared CJS code into a vendor chunk between
// the lazy chunks (not the main bundle, since main doesn't use lodash).
const LazyA = lazy(() => import("./LazyA.jsx"));
const LazyB = lazy(() => import("./LazyB.jsx"));
const LazyC = lazy(() => import("./LazyC.jsx"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <LazyA />
      <LazyB />
      <LazyC />
    </Suspense>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
