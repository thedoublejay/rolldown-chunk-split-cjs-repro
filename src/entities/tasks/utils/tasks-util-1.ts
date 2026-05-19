
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function tasksUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function tasksGet1(o, p) { return get(o, p); }
export const TASKS_PREFIX_1 = "tasks-1";
