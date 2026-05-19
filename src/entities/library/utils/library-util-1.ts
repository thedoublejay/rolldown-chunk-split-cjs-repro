
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function libraryUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function libraryGet1(o, p) { return get(o, p); }
export const LIBRARY_PREFIX_1 = "library-1";
