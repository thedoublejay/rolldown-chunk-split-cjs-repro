
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer2 from "../../legacy/containers/LegacyContainer2";
import { Shared2 } from "../components/Shared2";
import { utilFn2 } from "../utils/util-2";
import { useStore2 } from "../stores/store-2";

export const GLUE_1 = _.toUpper("glue-1");
export function Glue1({ value }) {
  const count = useStore2(s => s.count);
  return <div><p>{GLUE_1} {get({value}, ["value"], "")} {utilFn2({value}, ["value"], "")} {count}</p><Shared2>glue</Shared2><LegacyContainer2 title="g1" /></div>;
}
export default Glue1;
