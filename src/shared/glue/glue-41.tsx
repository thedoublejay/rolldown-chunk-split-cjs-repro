
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer10 from "../../legacy/containers/LegacyContainer10";
import { Shared2 } from "../components/Shared2";
import { utilFn2 } from "../utils/util-2";
import { useStore2 } from "../stores/store-2";

export const GLUE_41 = _.toUpper("glue-41");
export function Glue41({ value }) {
  const count = useStore2(s => s.count);
  return <div><p>{GLUE_41} {get({value}, ["value"], "")} {utilFn2({value}, ["value"], "")} {count}</p><Shared2>glue</Shared2><LegacyContainer10 title="g41" /></div>;
}
export default Glue41;
