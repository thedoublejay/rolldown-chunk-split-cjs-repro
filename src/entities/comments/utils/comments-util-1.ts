
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function commentsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function commentsGet1(o, p) { return get(o, p); }
export const COMMENTS_PREFIX_1 = "comments-1";
