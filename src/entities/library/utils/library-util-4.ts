
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function libraryUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function libraryGet4(o, p) { return get(o, p); }
export const LIBRARY_PREFIX_4 = "library-4";
