
import _ from "lodash";
import get from "lodash/get";

import { Shared35 } from "../components/Shared35";
import { utilFn15 } from "../utils/util-15";
import { useStore5 } from "../stores/store-5";

export const GLUE_34 = _.toUpper("glue-34");
export function Glue34({ value }) {
  const count = useStore5(s => s.count);
  return <div><p>{GLUE_34} {get({value}, ["value"], "")} {utilFn15({value}, ["value"], "")} {count}</p><Shared35>glue</Shared35></div>;
}
export default Glue34;
