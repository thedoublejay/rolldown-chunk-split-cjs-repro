
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function reportsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reportsGet1(o, p) { return get(o, p); }
export const REPORTS_PREFIX_1 = "reports-1";
