
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function feedsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function feedsGet4(o, p) { return get(o, p); }
export const FEEDS_PREFIX_4 = "feeds-4";
