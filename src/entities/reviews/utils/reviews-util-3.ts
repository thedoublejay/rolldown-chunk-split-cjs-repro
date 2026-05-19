
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function reviewsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reviewsGet3(o, p) { return get(o, p); }
export const REVIEWS_PREFIX_3 = "reviews-3";
