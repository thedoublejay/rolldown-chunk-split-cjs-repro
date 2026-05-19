
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function importsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function importsGet3(o, p) { return get(o, p); }
export const IMPORTS_PREFIX_3 = "imports-3";
