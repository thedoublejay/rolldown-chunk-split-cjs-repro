
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function alertsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function alertsGet1(o, p) { return get(o, p); }
export const ALERTS_PREFIX_1 = "alerts-1";
