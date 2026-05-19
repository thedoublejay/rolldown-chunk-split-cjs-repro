
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer14 from "../../legacy/containers/LegacyContainer14";
import { Shared6 } from "../components/Shared6";
import { utilFn6 } from "../utils/util-6";
import { useStore6 } from "../stores/store-6";

export const GLUE_45 = _.toUpper("glue-45");
export function Glue45({ value }) {
  const count = useStore6(s => s.count);
  return <div><p>{GLUE_45} {get({value}, ["value"], "")} {utilFn6({value}, ["value"], "")} {count}</p><Shared6>glue</Shared6><LegacyContainer14 title="g45" /></div>;
}
export default Glue45;
