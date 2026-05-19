
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function dashboardUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function dashboardGet3(o, p) { return get(o, p); }
export const DASHBOARD_PREFIX_3 = "dashboard-3";
