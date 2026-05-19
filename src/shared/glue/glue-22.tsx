
import _ from "lodash";
import get from "lodash/get";

import { Shared23 } from "../components/Shared23";
import { utilFn3 } from "../utils/util-3";
import { useStore3 } from "../stores/store-3";

export const GLUE_22 = _.toUpper("glue-22");
export function Glue22({ value }) {
  const count = useStore3(s => s.count);
  return <div><p>{GLUE_22} {get({value}, ["value"], "")} {utilFn3({value}, ["value"], "")} {count}</p><Shared23>glue</Shared23></div>;
}
export default Glue22;
