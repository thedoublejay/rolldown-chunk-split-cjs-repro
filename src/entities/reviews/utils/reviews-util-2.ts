
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn3 } from "../../../shared/utils/util-3";
export function reviewsUtil2(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reviewsGet2(o, p) { return get(o, p); }
export const REVIEWS_PREFIX_2 = "reviews-2";
