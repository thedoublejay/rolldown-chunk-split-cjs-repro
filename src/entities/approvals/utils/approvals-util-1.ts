
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function approvalsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function approvalsGet1(o, p) { return get(o, p); }
export const APPROVALS_PREFIX_1 = "approvals-1";
