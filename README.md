# rolldown chunk-split CJS interop repro (partial)

Companion repository to a rolldown bug report — see issue on `rolldown/rolldown`.

## What this repo is

A vanilla Vite 8.0.13 + React 19 app set up under the same conditions where a real-world Vite 8.0.13 production build emits broken CJS interop across chunk boundaries:

- Three `React.lazy(() => import(...))` boundaries (`LazyA`, `LazyB`, `LazyC`)
- All three import the same `lodash/<sub>` CJS submodules → rolldown extracts them into a shared vendor chunk
- ESM libs (`@mui/material`, `@tanstack/react-query`, `clsx`, `@emotion/react`) mixed with the CJS modules to match the real failing chunk's shape
- `tss-react/mui` `withStyles` used in a lazy component, matching the real failing file (legacy `withStyles` + lodash subpaths)
- `vite.config.js` mirrors the real config's distinctive bits: `react({ jsxImportSource: "@emotion/react" })` and `rolldown.moduleTypes: { ".js": "jsx" }`

## Status

**This repo does NOT reproduce the bug standalone** — rolldown emits correct interop here. The same Vite/rolldown versions + the same lodash subpaths + the same lazy/Suspense structure reproduce the bug in a larger codebase (5000+ modules). The trigger appears to depend on graph shape we couldn't isolate.

It's included as a **starting point** for the maintainer: same dependencies, same config, same import shapes. If a small additional change tips this over the edge, it should be easy to find from here.

## Build / preview

```bash
npm install
npm run build      # vite 8.0.13 + rolldown 1.0.1
npm run preview    # serves dist/ on http://localhost:4173
```

## See also

- Issue on `rolldown/rolldown` (linked from this repo's GitHub description)
- Closely related bug, different surface: <https://github.com/rolldown/rolldown/issues/9407>
