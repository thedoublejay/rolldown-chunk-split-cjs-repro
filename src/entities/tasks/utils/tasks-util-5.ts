
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function tasksUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function tasksGet5(o, p) { return get(o, p); }
export const TASKS_PREFIX_5 = "tasks-5";
