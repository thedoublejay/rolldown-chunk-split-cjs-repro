
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function analyticsUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function analyticsGet5(o, p) { return get(o, p); }
export const ANALYTICS_PREFIX_5 = "analytics-5";
