
import _ from "lodash";
import get from "lodash/get";

import { Shared3 } from "../components/Shared3";
import { utilFn3 } from "../utils/util-3";
import { useStore3 } from "../stores/store-3";

export const GLUE_42 = _.toUpper("glue-42");
export function Glue42({ value }) {
  const count = useStore3(s => s.count);
  return <div><p>{GLUE_42} {get({value}, ["value"], "")} {utilFn3({value}, ["value"], "")} {count}</p><Shared3>glue</Shared3></div>;
}
export default Glue42;
