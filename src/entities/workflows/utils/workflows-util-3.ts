
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function workflowsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function workflowsGet3(o, p) { return get(o, p); }
export const WORKFLOWS_PREFIX_3 = "workflows-3";
