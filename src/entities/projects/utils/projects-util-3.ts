
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn4 } from "../../../shared/utils/util-4";
export function projectsUtil3(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function projectsGet3(o, p) { return get(o, p); }
export const PROJECTS_PREFIX_3 = "projects-3";
