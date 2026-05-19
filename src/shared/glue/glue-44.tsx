
import _ from "lodash";
import get from "lodash/get";

import { Shared5 } from "../components/Shared5";
import { utilFn5 } from "../utils/util-5";
import { useStore5 } from "../stores/store-5";

export const GLUE_44 = _.toUpper("glue-44");
export function Glue44({ value }) {
  const count = useStore5(s => s.count);
  return <div><p>{GLUE_44} {get({value}, ["value"], "")} {utilFn5({value}, ["value"], "")} {count}</p><Shared5>glue</Shared5></div>;
}
export default Glue44;
