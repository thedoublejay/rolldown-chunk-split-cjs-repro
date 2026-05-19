
import _ from "lodash";
import get from "lodash/get";

import { Shared21 } from "../components/Shared21";
import { utilFn1 } from "../utils/util-1";
import { useStore1 } from "../stores/store-1";

export const GLUE_20 = _.toUpper("glue-20");
export function Glue20({ value }) {
  const count = useStore1(s => s.count);
  return <div><p>{GLUE_20} {get({value}, ["value"], "")} {utilFn1({value}, ["value"], "")} {count}</p><Shared21>glue</Shared21></div>;
}
export default Glue20;
