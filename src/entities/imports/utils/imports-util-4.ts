
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function importsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function importsGet4(o, p) { return get(o, p); }
export const IMPORTS_PREFIX_4 = "imports-4";
