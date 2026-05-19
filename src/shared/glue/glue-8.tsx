
import _ from "lodash";
import get from "lodash/get";

import { Shared9 } from "../components/Shared9";
import { utilFn9 } from "../utils/util-9";
import { useStore9 } from "../stores/store-9";

export const GLUE_8 = _.toUpper("glue-8");
export function Glue8({ value }) {
  const count = useStore9(s => s.count);
  return <div><p>{GLUE_8} {get({value}, ["value"], "")} {utilFn9({value}, ["value"], "")} {count}</p><Shared9>glue</Shared9></div>;
}
export default Glue8;
