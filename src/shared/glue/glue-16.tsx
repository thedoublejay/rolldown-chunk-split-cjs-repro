
import _ from "lodash";
import get from "lodash/get";

import { Shared17 } from "../components/Shared17";
import { utilFn17 } from "../utils/util-17";
import { useStore7 } from "../stores/store-7";

export const GLUE_16 = _.toUpper("glue-16");
export function Glue16({ value }) {
  const count = useStore7(s => s.count);
  return <div><p>{GLUE_16} {get({value}, ["value"], "")} {utilFn17({value}, ["value"], "")} {count}</p><Shared17>glue</Shared17></div>;
}
export default Glue16;
