
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function logsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function logsGet1(o, p) { return get(o, p); }
export const LOGS_PREFIX_1 = "logs-1";
