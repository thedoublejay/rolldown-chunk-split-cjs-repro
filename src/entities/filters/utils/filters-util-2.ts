
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn3 } from "../../../shared/utils/util-3";
export function filtersUtil2(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function filtersGet2(o, p) { return get(o, p); }
export const FILTERS_PREFIX_2 = "filters-2";
