
import _ from "lodash";
import get from "lodash/get";

import { Shared7 } from "../components/Shared7";
import { utilFn7 } from "../utils/util-7";
import { useStore7 } from "../stores/store-7";

export const GLUE_46 = _.toUpper("glue-46");
export function Glue46({ value }) {
  const count = useStore7(s => s.count);
  return <div><p>{GLUE_46} {get({value}, ["value"], "")} {utilFn7({value}, ["value"], "")} {count}</p><Shared7>glue</Shared7></div>;
}
export default Glue46;
