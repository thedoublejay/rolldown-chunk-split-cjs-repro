
import _ from "lodash";
import get from "lodash/get";

import { Shared31 } from "../components/Shared31";
import { utilFn11 } from "../utils/util-11";
import { useStore1 } from "../stores/store-1";

export const GLUE_30 = _.toUpper("glue-30");
export function Glue30({ value }) {
  const count = useStore1(s => s.count);
  return <div><p>{GLUE_30} {get({value}, ["value"], "")} {utilFn11({value}, ["value"], "")} {count}</p><Shared31>glue</Shared31></div>;
}
export default Glue30;
