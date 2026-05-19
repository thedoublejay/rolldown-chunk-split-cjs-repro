
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function invitationsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function invitationsGet1(o, p) { return get(o, p); }
export const INVITATIONS_PREFIX_1 = "invitations-1";
