
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn5 } from "../../../shared/utils/util-5";
export function invitationsUtil4(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function invitationsGet4(o, p) { return get(o, p); }
export const INVITATIONS_PREFIX_4 = "invitations-4";
