
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import _ from "lodash";

// Vite glob import — common pattern that produces many dynamic imports at once
const routeModules = import.meta.glob<{ default: React.ComponentType }>("./routes/Route*.tsx");
const routes = Object.entries(routeModules).map(([p, loader]) => {
  const name = p.match(/Route(\d+)/)?.[1] || "?";
  const C = lazy(loader as any);
  return { name, C };
});

const qc = new QueryClient();
function App() {
  console.log("main", _.upperFirst("app"), routes.length);
  return (
    <Suspense fallback={<p>loading</p>}>
      {routes.map(({ name, C }) => <C key={name} />)}
    </Suspense>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qc}><App /></QueryClientProvider>
  </StrictMode>
);
