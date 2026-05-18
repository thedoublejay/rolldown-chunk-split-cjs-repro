// Run with: node cycle-demo/entry.js
//
// Demonstrates the JS-level mechanism behind the rolldown 1.0.0+ symptom
// `TypeError: c is not a function` at lazy-chunk module init:
//
//   a.js and b.js form an ESM cycle. Both export `__commonJSMin`-wrapped
//   bindings declared with `var`. When the cycle resolves, b.js runs its
//   top-level code BEFORE a.js finishes initialising — so `x` (imported
//   from a.js) is still in its TDZ-equivalent state for `var` and reads
//   back as `undefined`. Calling `x()` then throws.
//
// This is JS spec behaviour, not a rolldown bug per se — but the
// rolldown bug is that 1.0.0+ produces chunk graphs with cycles between
// vendor chunks that 1.0.0-rc.18 did not.
import { x } from "./a.js";
console.log("entry: x()=", x());
