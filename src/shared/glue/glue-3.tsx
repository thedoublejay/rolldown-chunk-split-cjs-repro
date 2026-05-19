
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer4 from "../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../components/Shared4";
import { utilFn4 } from "../utils/util-4";
import { useStore4 } from "../stores/store-4";

export const GLUE_3 = _.toUpper("glue-3");
export function Glue3({ value }) {
  const count = useStore4(s => s.count);
  return <div><p>{GLUE_3} {get({value}, ["value"], "")} {utilFn4({value}, ["value"], "")} {count}</p><Shared4>glue</Shared4><LegacyContainer4 title="g3" /></div>;
}
export default Glue3;
