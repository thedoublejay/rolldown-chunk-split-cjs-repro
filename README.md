# rolldown chunk-split CJS interop repro

Companion repository to <https://github.com/rolldown/rolldown/issues/9441>.

## TL;DR

In vite 8.0.12+ (rolldown 1.0.0 / 1.0.1), a production build can emit a
**cyclic graph between vendor chunks**, where each chunk exposes
`__commonJSMin`-wrapped CJS modules as `var` bindings. When a lazy chunk
imports one of those bindings and calls it at module-init time inside the
cycle, the importer reads `undefined` and throws:

```
TypeError: c is not a function
    at app.<hash>.chunk.js:1:272
Caused by: React ErrorBoundary
    at Lazy (<anonymous>)
    at Suspense (<anonymous>)
```

The same source code built with vite **8.0.11** (rolldown `1.0.0-rc.18`)
emits no such cycle and loads correctly.

## What's in this repo

### `cycle-demo/` — pure-Node demonstration of the JS-level mechanism

```bash
node cycle-demo/entry.js
```

Two ESM modules circularly import each other; both export `var`-bound
`__commonJSMin` wrappers; one calls the other's wrapper at module init.
Reproduces the exact `"x is not a function"` error with zero bundler
involvement. This is the JS spec at work — but it's the trap rolldown's
new chunker drops production bundles into.

### Root (`src/`) — Vite production build under conditions that matched the failing app

```bash
npm install
npm run build       # vite 8.0.13 + rolldown 1.0.1
npm run preview     # http://localhost:4173
```

The Vite project sets up:

- 3 × `React.lazy(() => import(...))` boundaries, each importing both the
  lodash main entry (`lodash`) and lodash CJS subpaths (`lodash/get` etc.)
- Source-level circular imports between `util-a.js` and `util-b.js`
- `vite.config.js` mirrors the failing app's distinctive flags:
  `react({ jsxImportSource: "@emotion/react" })` and
  `rolldown.moduleTypes: { ".js": "jsx" }`

**Status:** rolldown chooses to inline both halves of the source-level
cycle into a single shared chunk here, so the chunk graph stays acyclic
and the bug does not surface. In a larger codebase (~5000 modules, dozens
of shared chunks, deeper dependency interleaving) rolldown ends up
emitting cycles between separate vendor chunks instead — that's the case
where the JS-level mechanism in `cycle-demo/` then triggers at runtime.

I haven't yet found the smaller graph shape that tips rolldown's chunker
into emitting cyclic vendor chunks for the same `package.json`. A
maintainer hint on what changed in chunk emission between
`1.0.0-rc.18` → `1.0.0` / `1.0.1` for this case would let me shrink the
repo further.

## Bisect

| Vite version | Bundled rolldown | Status |
|---|---|---|
| 8.0.1  | `1.0.0-rc.10` | ✅ works |
| 8.0.11 | `1.0.0-rc.18` | ✅ works |
| 8.0.12 | `1.0.0`       | ⚠ likely affected (same rolldown family — not directly retested) |
| 8.0.13 | `1.0.1`       | ❌ reproduces (`TypeError: c is not a function`) |

Bisect was carried out against the real-world failing app: same source,
same install state, only the Vite/rolldown version changed.

Also ruled out by separate bisects against the failing app:
- `lodash`/`lodash-es` version (`4.17.23` vs `4.18.1`)
- `@vitejs/plugin-react` version (`6.0.0` vs `6.0.2`)
- `react` / `react-dom` version (`19.0` vs `19.2.6`)
