
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function documentsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function documentsGet1(o, p) { return get(o, p); }
export const DOCUMENTS_PREFIX_1 = "documents-1";
