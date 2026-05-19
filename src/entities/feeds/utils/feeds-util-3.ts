
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function feedsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function feedsGet3(o, p) { return get(o, p); }
export const FEEDS_PREFIX_3 = "feeds-3";
