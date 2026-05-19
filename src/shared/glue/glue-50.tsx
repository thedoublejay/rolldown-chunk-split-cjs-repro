
import _ from "lodash";
import get from "lodash/get";

import { Shared11 } from "../components/Shared11";
import { utilFn11 } from "../utils/util-11";
import { useStore1 } from "../stores/store-1";

export const GLUE_50 = _.toUpper("glue-50");
export function Glue50({ value }) {
  const count = useStore1(s => s.count);
  return <div><p>{GLUE_50} {get({value}, ["value"], "")} {utilFn11({value}, ["value"], "")} {count}</p><Shared11>glue</Shared11></div>;
}
export default Glue50;
