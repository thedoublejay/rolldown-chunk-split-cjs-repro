
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function tagsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function tagsGet4(o, p) { return get(o, p); }
export const TAGS_PREFIX_4 = "tags-4";
