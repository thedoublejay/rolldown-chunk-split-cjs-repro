
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function documentsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function documentsGet6(o, p) { return get(o, p); }
export const DOCUMENTS_PREFIX_6 = "documents-6";
