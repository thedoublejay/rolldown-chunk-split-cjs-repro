
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function metricsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function metricsGet1(o, p) { return get(o, p); }
export const METRICS_PREFIX_1 = "metrics-1";
