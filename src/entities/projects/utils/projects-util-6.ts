
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn7 } from "../../../shared/utils/util-7";
export function projectsUtil6(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function projectsGet6(o, p) { return get(o, p); }
export const PROJECTS_PREFIX_6 = "projects-6";
