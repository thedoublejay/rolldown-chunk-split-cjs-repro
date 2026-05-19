
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn2 } from "../../../shared/utils/util-2";
export function notificationsUtil1(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function notificationsGet1(o, p) { return get(o, p); }
export const NOTIFICATIONS_PREFIX_1 = "notifications-1";
