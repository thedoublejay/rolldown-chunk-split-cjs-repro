
import _ from "lodash";
import get from "lodash/get";

import { Shared37 } from "../components/Shared37";
import { utilFn17 } from "../utils/util-17";
import { useStore7 } from "../stores/store-7";

export const GLUE_36 = _.toUpper("glue-36");
export function Glue36({ value }) {
  const count = useStore7(s => s.count);
  return <div><p>{GLUE_36} {get({value}, ["value"], "")} {utilFn17({value}, ["value"], "")} {count}</p><Shared37>glue</Shared37></div>;
}
export default Glue36;
