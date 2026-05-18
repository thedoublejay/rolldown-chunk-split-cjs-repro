import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Mirrors a real-world failing config: @emotion/react as the JSX runtime
// and rolldown.moduleTypes mapping .js → jsx (some legacy codebases put
// JSX in .js files). Either condition alone might be enough — kept both
// to match the original setup that surfaced the bug.
export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  build: {
    rolldownOptions: {
      moduleTypes: { ".js": "jsx" },
    },
  },
});
