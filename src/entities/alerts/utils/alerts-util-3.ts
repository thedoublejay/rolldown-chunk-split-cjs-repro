
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function alertsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function alertsGet3(o, p) { return get(o, p); }
export const ALERTS_PREFIX_3 = "alerts-3";
