
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function reviewsUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reviewsGet5(o, p) { return get(o, p); }
export const REVIEWS_PREFIX_5 = "reviews-5";
