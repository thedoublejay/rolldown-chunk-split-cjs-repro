
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer12 from "../../legacy/containers/LegacyContainer12";
import { Shared4 } from "../components/Shared4";
import { utilFn4 } from "../utils/util-4";
import { useStore4 } from "../stores/store-4";

export const GLUE_43 = _.toUpper("glue-43");
export function Glue43({ value }) {
  const count = useStore4(s => s.count);
  return <div><p>{GLUE_43} {get({value}, ["value"], "")} {utilFn4({value}, ["value"], "")} {count}</p><Shared4>glue</Shared4><LegacyContainer12 title="g43" /></div>;
}
export default Glue43;
