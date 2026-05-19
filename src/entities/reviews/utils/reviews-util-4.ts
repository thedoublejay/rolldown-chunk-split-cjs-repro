
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function reviewsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reviewsGet4(o, p) { return get(o, p); }
export const REVIEWS_PREFIX_4 = "reviews-4";
