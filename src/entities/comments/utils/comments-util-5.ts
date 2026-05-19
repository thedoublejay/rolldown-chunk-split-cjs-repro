
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function commentsUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function commentsGet5(o, p) { return get(o, p); }
export const COMMENTS_PREFIX_5 = "comments-5";
