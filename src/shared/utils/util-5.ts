
import _ from "lodash";
import get from "lodash/get";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
export function utilFn5(obj, p, d = null) { if (isEmpty(obj)) return d; return get(obj, p, d); }
export function deepCheck5(a, b) { return isEqual(a, b) && has(a, ["valid"]); }
export const PREFIX_5 = _.upperFirst("util-5");
