import { x } from "./a.js";

console.log("b.js top: typeof x =", typeof x);
try {
  // Same shape as the importer in the real bug:
  //   var d = _interopRequireDefault(x())
  // x() is expected to be the __commonJSMin lazy require wrapper.
  const d = x();
  console.log("b.js: x() returned:", d);
} catch (e) {
  console.log("b.js: x() FAILED:", e.message);
}

var y = (
  (cb, mod) => () =>
    (mod || cb((mod = { exports: {} }).exports, mod), mod.exports)
)((e, t) => {
  t.exports = "from b";
});

export { y };
