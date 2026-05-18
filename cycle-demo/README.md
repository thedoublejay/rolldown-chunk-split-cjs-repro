# cycle-demo

Pure-Node ESM proof of the mechanism behind the production symptom
`TypeError: c is not a function` at lazy-chunk init.

```bash
node cycle-demo/entry.js
```

Expected output:

```
b.js top: typeof x = undefined          ← x is `var`-bound, cycle hasn't initialised a.js yet
b.js: x() FAILED: x is not a function   ← the exact production error
a.js top: typeof y = function
entry: x()= from a
```

This is JS spec behaviour, not a rolldown bug. The **rolldown** bug is upstream:
since 1.0.0-rc.18 → 1.0.0/1.0.1, rolldown's chunker started producing chunk
graphs with cycles between vendor chunks for the same source code, where
each chunk emits `__commonJSMin`-wrapped CJS modules as `var` bindings.
That combination triggers exactly this symptom in the browser at production
load time.
