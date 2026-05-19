
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import _ from "lodash";

// Second entry uses pages (different glob)
const pageModules = import.meta.glob<{ default: React.ComponentType }>("./pages/Page*.tsx");
const pages = Object.entries(pageModules).map(([p, loader]) => {
  const name = p.match(/Page(\d+)/)?.[1] || "?";
  const C = lazy(loader as any);
  return { name, C };
});

const qc = new QueryClient();
function App2() {
  console.log("main2", _.upperFirst("app2"), pages.length);
  return (
    <Suspense fallback={<p>loading</p>}>
      {pages.map(({ name, C }) => <C key={name} />)}
    </Suspense>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qc}><App2 /></QueryClientProvider>
  </StrictMode>
);
