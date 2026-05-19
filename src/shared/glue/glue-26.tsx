
import _ from "lodash";
import get from "lodash/get";

import { Shared27 } from "../components/Shared27";
import { utilFn7 } from "../utils/util-7";
import { useStore7 } from "../stores/store-7";

export const GLUE_26 = _.toUpper("glue-26");
export function Glue26({ value }) {
  const count = useStore7(s => s.count);
  return <div><p>{GLUE_26} {get({value}, ["value"], "")} {utilFn7({value}, ["value"], "")} {count}</p><Shared27>glue</Shared27></div>;
}
export default Glue26;
