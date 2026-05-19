
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function usersUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function usersGet5(o, p) { return get(o, p); }
export const USERS_PREFIX_5 = "users-5";
