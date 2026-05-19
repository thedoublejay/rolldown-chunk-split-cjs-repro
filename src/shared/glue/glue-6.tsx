
import _ from "lodash";
import get from "lodash/get";

import { Shared7 } from "../components/Shared7";
import { utilFn7 } from "../utils/util-7";
import { useStore7 } from "../stores/store-7";

export const GLUE_6 = _.toUpper("glue-6");
export function Glue6({ value }) {
  const count = useStore7(s => s.count);
  return <div><p>{GLUE_6} {get({value}, ["value"], "")} {utilFn7({value}, ["value"], "")} {count}</p><Shared7>glue</Shared7></div>;
}
export default Glue6;
