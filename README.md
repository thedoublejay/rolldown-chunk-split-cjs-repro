# rolldown chunk-split CJS interop repro — synthetic-scale attempt

Companion repository to <https://github.com/rolldown/rolldown/issues/9441>.

## Status

**Best-effort scaled reproduction — does not cycle on its own at this scale.** This repo mirrors the failing app's structural patterns (1,121 source files, 120 React.lazy routes, mixed CJS/ESM vendor deps, legacy + modern code, tss-react `withStyles` with `lodash/<sub>` defaults, `import.meta.glob` lazy routing, multi-entry HTML with overlapping lazy sets) but rolldown's default chunker successfully avoids cycles for this graph.

In the real-world failing app (~5,000 modules, similar deps and patterns), vite `8.0.13` (rolldown `1.0.1`) produces **8,678 chunk cycles** including the production-failure shape — and vite `8.0.11` (rolldown `1.0.0-rc.18`) on the *same source* produces **0 cycles**. So the same graph crosses the chunker's threshold at production scale that this synthetic does not.

## What this repo demonstrates

- Production-realistic Vite 8 + React 19 setup with `@mui/material`, `@mui/x-data-grid`, `@mui/x-date-pickers`, `@tanstack/react-query`, `@emotion/styled`, `tss-react`, `react-hook-form`, `react-router`, `zustand`, `yup`, `lodash` (main + subpath), `clsx`, `date-fns`
- 30 entity modules × {components, hooks, utils} + 60 legacy components in cyclic legacy containers + 50 shared "glue" components + 40 shared MUI wrappers
- 120 lazy routes via `import.meta.glob` and two HTML entries (`index.html`, `page2.html`) with overlapping lazy sets
- A `barrel.tsx` that re-exports many shared utilities and references legacy components — produces a `barrel-<hash>.js` shared chunk in the output graph
- A `jsx-runtime-<hash>.js` extracted chunk (matches the shape from rolldown's own [#9331](https://github.com/rolldown/rolldown/issues/9331) regression)
- Every Route chunk has the **exact emission pattern** that fails in production:

  ```js
  import { S as e, b as t, t as n } from "./jsx-runtime-<hash>.js";
  import { ... } from "./barrel-<hash>.js";
  var g = e(t(), 1);           // ← this shape fails when t is in a TDZ cycle
  ```

  In the failing app `t` reads back as `undefined` because the chunk graph contains a cycle that puts it in a not-yet-initialised state at module init. In this synthetic the chunk graph is acyclic, so `t` is initialised by the time the call runs.

## Build / preview

```bash
npm install
npm run build         # vite 8.0.13 + rolldown 1.0.1
npm run preview       # http://localhost:4173
```

## Bisect evidence (from the real-world failing app)

| vite (rolldown) | Cyclic chunk imports |
| --- | --- |
| `8.0.11` (`1.0.0-rc.18`) | **0** |
| `8.0.13` (`1.0.1`) | **8678** |

Smallest cycle observed:

```
big-vendor.chunk.js  (1.7 MB, 1196 sources — lodash + @mui + @tanstack + ~700 app sources)
  imports "t as Wd" from
mid-legacy.chunk.js  (34 KB, 4 sources — two legacy form components + their styles)
  imports "t as w" from
button.chunk.js      (9 KB, 2 sources — legacy <Button1> + its styles, uses lodash/get)
  imports "T as c" from
big-vendor.chunk.js  ← cycle closes back
```

`T as c` is `lodash/get`'s `__commonJSMin` wrapper. The cycle puts that `var` binding in TDZ-equivalent state when the button chunk's top-level `var d = a(c())` runs, so `c` reads `undefined` → `TypeError: c is not a function`.

## Reproduction shapes I tried that all stayed acyclic at this scale

- The [#9331](https://github.com/rolldown/rolldown/issues/9331) fixture verbatim
- 3-way util cycle imported by N lazy routes
- Source-level `.cjs` cycles with top-level cross-chunk calls
- 100-module shared registry pulling many `lodash/<sub>` paths
- `manualChunks` forcing the cycle (works — but builds the same on rc.18, so it's not the regression)
- Multi-entry vite with overlapping lazy sets (this repo's current state)
- `import.meta.glob` lazy routing (this repo's current state)
- `barrel.tsx` JSX component to force a `barrel → jsx-runtime` edge

The chunker is robust at every shape I could construct at ~1,000-file scale.

## Hypothesis

The chunker change in vite `8.0.12` → `8.0.13` (rolldown `1.0.0` → `1.0.1`) came from two PRs:

- v1.0.0 [#9270](https://github.com/rolldown/rolldown/pull/9270) — *implement dynamic dominator merge logic*
- v1.0.1 [#9305](https://github.com/rolldown/rolldown/pull/9305) — *chunk-optimization: dedupe already-loaded dynamic deps*

[#9305](https://github.com/rolldown/rolldown/pull/9305) covered the [#9331](https://github.com/rolldown/rolldown/issues/9331) case (confirmed — fixture builds cleanly). The hypothesis is it didn't cover an adjacent case the production graph hits, where the "intersection of loaded atoms from every importer entry" check leaves a `var`-bound `__commonJSMin` wrapper TDZ-exposed across the cycle.
