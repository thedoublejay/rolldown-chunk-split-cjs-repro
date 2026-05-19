
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function logsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function logsGet3(o, p) { return get(o, p); }
export const LOGS_PREFIX_3 = "logs-3";
