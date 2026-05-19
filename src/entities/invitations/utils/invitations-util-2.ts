
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn3 } from "../../../shared/utils/util-3";
export function invitationsUtil2(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function invitationsGet2(o, p) { return get(o, p); }
export const INVITATIONS_PREFIX_2 = "invitations-2";
