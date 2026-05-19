
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer12 from "../../legacy/containers/LegacyContainer12";
import { Shared12 } from "../components/Shared12";
import { utilFn12 } from "../utils/util-12";
import { useStore2 } from "../stores/store-2";

export const GLUE_11 = _.toUpper("glue-11");
export function Glue11({ value }) {
  const count = useStore2(s => s.count);
  return <div><p>{GLUE_11} {get({value}, ["value"], "")} {utilFn12({value}, ["value"], "")} {count}</p><Shared12>glue</Shared12><LegacyContainer12 title="g11" /></div>;
}
export default Glue11;
