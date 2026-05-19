
import _ from "lodash";
import get from "lodash/get";

import { Shared39 } from "../components/Shared39";
import { utilFn19 } from "../utils/util-19";
import { useStore9 } from "../stores/store-9";

export const GLUE_38 = _.toUpper("glue-38");
export function Glue38({ value }) {
  const count = useStore9(s => s.count);
  return <div><p>{GLUE_38} {get({value}, ["value"], "")} {utilFn19({value}, ["value"], "")} {count}</p><Shared39>glue</Shared39></div>;
}
export default Glue38;
