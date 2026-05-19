
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer4 from "../../legacy/containers/LegacyContainer4";
import { Shared36 } from "../components/Shared36";
import { utilFn16 } from "../utils/util-16";
import { useStore6 } from "../stores/store-6";

export const GLUE_35 = _.toUpper("glue-35");
export function Glue35({ value }) {
  const count = useStore6(s => s.count);
  return <div><p>{GLUE_35} {get({value}, ["value"], "")} {utilFn16({value}, ["value"], "")} {count}</p><Shared36>glue</Shared36><LegacyContainer4 title="g35" /></div>;
}
export default Glue35;
