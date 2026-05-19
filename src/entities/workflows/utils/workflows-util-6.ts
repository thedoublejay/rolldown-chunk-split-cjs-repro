
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function workflowsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function workflowsGet6(o, p) { return get(o, p); }
export const WORKFLOWS_PREFIX_6 = "workflows-6";
