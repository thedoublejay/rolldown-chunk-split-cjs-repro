
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function workflowsUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function workflowsGet5(o, p) { return get(o, p); }
export const WORKFLOWS_PREFIX_5 = "workflows-5";
