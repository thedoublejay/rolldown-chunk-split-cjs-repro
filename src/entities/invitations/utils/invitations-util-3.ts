
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function invitationsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function invitationsGet3(o, p) { return get(o, p); }
export const INVITATIONS_PREFIX_3 = "invitations-3";
