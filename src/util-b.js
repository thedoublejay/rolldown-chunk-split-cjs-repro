// Closes the cycle with util-a.
import has from "lodash/has";
import { utilA } from "./util-a.js";

export function utilB(obj) {
  if (has(obj, ["b"])) {
    return obj.b.value;
  }
  return utilA({ a: { value: -1 } });
}
