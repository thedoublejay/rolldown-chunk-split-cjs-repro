
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer10 from "../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../components/Shared10";
import { utilFn10 } from "../utils/util-10";
import { useStore10 } from "../stores/store-10";

export const GLUE_9 = _.toUpper("glue-9");
export function Glue9({ value }) {
  const count = useStore10(s => s.count);
  return <div><p>{GLUE_9} {get({value}, ["value"], "")} {utilFn10({value}, ["value"], "")} {count}</p><Shared10>glue</Shared10><LegacyContainer10 title="g9" /></div>;
}
export default Glue9;
