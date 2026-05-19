
import _ from "lodash";
import get from "lodash/get";

import { Shared11 } from "../components/Shared11";
import { utilFn11 } from "../utils/util-11";
import { useStore1 } from "../stores/store-1";

export const GLUE_10 = _.toUpper("glue-10");
export function Glue10({ value }) {
  const count = useStore1(s => s.count);
  return <div><p>{GLUE_10} {get({value}, ["value"], "")} {utilFn11({value}, ["value"], "")} {count}</p><Shared11>glue</Shared11></div>;
}
export default Glue10;
