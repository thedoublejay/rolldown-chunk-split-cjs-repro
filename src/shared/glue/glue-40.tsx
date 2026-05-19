
import _ from "lodash";
import get from "lodash/get";

import { Shared1 } from "../components/Shared1";
import { utilFn1 } from "../utils/util-1";
import { useStore1 } from "../stores/store-1";

export const GLUE_40 = _.toUpper("glue-40");
export function Glue40({ value }) {
  const count = useStore1(s => s.count);
  return <div><p>{GLUE_40} {get({value}, ["value"], "")} {utilFn1({value}, ["value"], "")} {count}</p><Shared1>glue</Shared1></div>;
}
export default Glue40;
