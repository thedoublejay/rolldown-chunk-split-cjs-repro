
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function sessionsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function sessionsGet3(o, p) { return get(o, p); }
export const SESSIONS_PREFIX_3 = "sessions-3";
