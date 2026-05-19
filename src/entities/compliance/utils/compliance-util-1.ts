
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function complianceUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function complianceGet1(o, p) { return get(o, p); }
export const COMPLIANCE_PREFIX_1 = "compliance-1";
