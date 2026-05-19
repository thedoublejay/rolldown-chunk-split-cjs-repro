
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer14 from "../../legacy/containers/LegacyContainer14";
import { Shared14 } from "../components/Shared14";
import { utilFn14 } from "../utils/util-14";
import { useStore4 } from "../stores/store-4";

export const GLUE_13 = _.toUpper("glue-13");
export function Glue13({ value }) {
  const count = useStore4(s => s.count);
  return <div><p>{GLUE_13} {get({value}, ["value"], "")} {utilFn14({value}, ["value"], "")} {count}</p><Shared14>glue</Shared14><LegacyContainer14 title="g13" /></div>;
}
export default Glue13;
