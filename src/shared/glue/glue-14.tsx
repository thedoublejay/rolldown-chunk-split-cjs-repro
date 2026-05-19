
import _ from "lodash";
import get from "lodash/get";

import { Shared15 } from "../components/Shared15";
import { utilFn15 } from "../utils/util-15";
import { useStore5 } from "../stores/store-5";

export const GLUE_14 = _.toUpper("glue-14");
export function Glue14({ value }) {
  const count = useStore5(s => s.count);
  return <div><p>{GLUE_14} {get({value}, ["value"], "")} {utilFn15({value}, ["value"], "")} {count}</p><Shared15>glue</Shared15></div>;
}
export default Glue14;
