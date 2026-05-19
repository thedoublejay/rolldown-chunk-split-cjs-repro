
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function tagsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function tagsGet3(o, p) { return get(o, p); }
export const TAGS_PREFIX_3 = "tags-3";
