
import _ from "lodash";
import get from "lodash/get";

import { Shared33 } from "../components/Shared33";
import { utilFn13 } from "../utils/util-13";
import { useStore3 } from "../stores/store-3";

export const GLUE_32 = _.toUpper("glue-32");
export function Glue32({ value }) {
  const count = useStore3(s => s.count);
  return <div><p>{GLUE_32} {get({value}, ["value"], "")} {utilFn13({value}, ["value"], "")} {count}</p><Shared33>glue</Shared33></div>;
}
export default Glue32;
