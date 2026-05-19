
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer6 from "../../legacy/containers/LegacyContainer6";
import { Shared6 } from "../components/Shared6";
import { utilFn6 } from "../utils/util-6";
import { useStore6 } from "../stores/store-6";

export const GLUE_5 = _.toUpper("glue-5");
export function Glue5({ value }) {
  const count = useStore6(s => s.count);
  return <div><p>{GLUE_5} {get({value}, ["value"], "")} {utilFn6({value}, ["value"], "")} {count}</p><Shared6>glue</Shared6><LegacyContainer6 title="g5" /></div>;
}
export default Glue5;
