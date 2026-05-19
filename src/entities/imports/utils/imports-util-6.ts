
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function importsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function importsGet6(o, p) { return get(o, p); }
export const IMPORTS_PREFIX_6 = "imports-6";
