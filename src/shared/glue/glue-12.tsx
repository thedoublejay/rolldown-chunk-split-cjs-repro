
import _ from "lodash";
import get from "lodash/get";

import { Shared13 } from "../components/Shared13";
import { utilFn13 } from "../utils/util-13";
import { useStore3 } from "../stores/store-3";

export const GLUE_12 = _.toUpper("glue-12");
export function Glue12({ value }) {
  const count = useStore3(s => s.count);
  return <div><p>{GLUE_12} {get({value}, ["value"], "")} {utilFn13({value}, ["value"], "")} {count}</p><Shared13>glue</Shared13></div>;
}
export default Glue12;
