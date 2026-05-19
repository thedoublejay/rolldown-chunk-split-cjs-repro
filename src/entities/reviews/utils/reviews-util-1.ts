
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function reviewsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function reviewsGet1(o, p) { return get(o, p); }
export const REVIEWS_PREFIX_1 = "reviews-1";
