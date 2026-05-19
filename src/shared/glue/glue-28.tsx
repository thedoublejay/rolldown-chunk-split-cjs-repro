
import _ from "lodash";
import get from "lodash/get";

import { Shared29 } from "../components/Shared29";
import { utilFn9 } from "../utils/util-9";
import { useStore9 } from "../stores/store-9";

export const GLUE_28 = _.toUpper("glue-28");
export function Glue28({ value }) {
  const count = useStore9(s => s.count);
  return <div><p>{GLUE_28} {get({value}, ["value"], "")} {utilFn9({value}, ["value"], "")} {count}</p><Shared29>glue</Shared29></div>;
}
export default Glue28;
