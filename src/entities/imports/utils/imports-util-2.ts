
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn3 } from "../../../shared/utils/util-3";
export function importsUtil2(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function importsGet2(o, p) { return get(o, p); }
export const IMPORTS_PREFIX_2 = "imports-2";
