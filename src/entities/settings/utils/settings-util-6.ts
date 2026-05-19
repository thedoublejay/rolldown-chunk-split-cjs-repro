
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function settingsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function settingsGet6(o, p) { return get(o, p); }
export const SETTINGS_PREFIX_6 = "settings-6";
