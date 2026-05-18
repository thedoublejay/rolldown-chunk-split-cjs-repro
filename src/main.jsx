import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// Three lazy boundaries — at least one of them imports BOTH the lodash
// main entry (`lodash`) AND lodash CJS subpaths (`lodash/get`, etc.).
// That mix forces rolldown to land both the full lodash bundle
// (lodash/lodash.js, ~17K LOC of internals) and the individual CJS
// subpath wrappers into the same chunk's top-level scope — where the
// rolldown 1.0.0+ minifier reuses the same short name for two unrelated
// top-level bindings and the broken export surfaces.
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
