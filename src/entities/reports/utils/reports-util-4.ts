
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function reportsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reportsGet4(o, p) { return get(o, p); }
export const REPORTS_PREFIX_4 = "reports-4";
