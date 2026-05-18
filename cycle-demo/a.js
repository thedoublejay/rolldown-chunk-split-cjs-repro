import { y } from "./b.js";

// Mirrors how rolldown emits a `__commonJSMin`-wrapped CJS module:
//   var X = __commonJSMin((exports, module) => { ... });
// At the chunk's top level, X is a `var` declaration.
var x = (
  (cb, mod) => () =>
    (mod || cb((mod = { exports: {} }).exports, mod), mod.exports)
)((e, t) => {
  t.exports = "from a";
});

console.log("a.js top: typeof y =", typeof y);

export { x };
