
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function campaignsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function campaignsGet6(o, p) { return get(o, p); }
export const CAMPAIGNS_PREFIX_6 = "campaigns-6";
