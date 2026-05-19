
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function exportsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function exportsGet4(o, p) { return get(o, p); }
export const EXPORTS_PREFIX_4 = "exports-4";
