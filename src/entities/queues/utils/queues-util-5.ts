
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import { utilFn6 } from "../../../shared/utils/util-6";
export function queuesUtil5(items, k) { return omit(keyBy(items, k), ["__skip"]); }
export function queuesGet5(o, p) { return get(o, p); }
export const QUEUES_PREFIX_5 = "queues-5";
