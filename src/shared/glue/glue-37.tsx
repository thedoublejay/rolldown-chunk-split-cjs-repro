
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer6 from "../../legacy/containers/LegacyContainer6";
import { Shared38 } from "../components/Shared38";
import { utilFn18 } from "../utils/util-18";
import { useStore8 } from "../stores/store-8";

export const GLUE_37 = _.toUpper("glue-37");
export function Glue37({ value }) {
  const count = useStore8(s => s.count);
  return <div><p>{GLUE_37} {get({value}, ["value"], "")} {utilFn18({value}, ["value"], "")} {count}</p><Shared38>glue</Shared38><LegacyContainer6 title="g37" /></div>;
}
export default Glue37;
