
import _ from "lodash";
import get from "lodash/get";

import { Shared25 } from "../components/Shared25";
import { utilFn5 } from "../utils/util-5";
import { useStore5 } from "../stores/store-5";

export const GLUE_24 = _.toUpper("glue-24");
export function Glue24({ value }) {
  const count = useStore5(s => s.count);
  return <div><p>{GLUE_24} {get({value}, ["value"], "")} {utilFn5({value}, ["value"], "")} {count}</p><Shared25>glue</Shared25></div>;
}
export default Glue24;
