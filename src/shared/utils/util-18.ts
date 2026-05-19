
import _ from "lodash";
import get from "lodash/get";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
export function utilFn18(obj, p, d = null) { if (isEmpty(obj)) return d; return get(obj, p, d); }
export function deepCheck18(a, b) { return isEqual(a, b) && has(a, ["valid"]); }
export const PREFIX_18 = _.upperFirst("util-18");
