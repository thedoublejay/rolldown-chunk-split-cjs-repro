// util-a depends on util-b (circular at source level).
// Both import lodash CJS subpaths so rolldown extracts them to vendor chunks.
import get from "lodash/get";
import { utilB } from "./util-b.js";

export function utilA(obj) {
  return get(obj, ["a", "value"], utilB({ b: { value: 0 } }));
}
