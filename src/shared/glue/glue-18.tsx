
import _ from "lodash";
import get from "lodash/get";

import { Shared19 } from "../components/Shared19";
import { utilFn19 } from "../utils/util-19";
import { useStore9 } from "../stores/store-9";

export const GLUE_18 = _.toUpper("glue-18");
export function Glue18({ value }) {
  const count = useStore9(s => s.count);
  return <div><p>{GLUE_18} {get({value}, ["value"], "")} {utilFn19({value}, ["value"], "")} {count}</p><Shared19>glue</Shared19></div>;
}
export default Glue18;
