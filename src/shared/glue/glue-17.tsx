
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer2 from "../../legacy/containers/LegacyContainer2";
import { Shared18 } from "../components/Shared18";
import { utilFn18 } from "../utils/util-18";
import { useStore8 } from "../stores/store-8";

export const GLUE_17 = _.toUpper("glue-17");
export function Glue17({ value }) {
  const count = useStore8(s => s.count);
  return <div><p>{GLUE_17} {get({value}, ["value"], "")} {utilFn18({value}, ["value"], "")} {count}</p><Shared18>glue</Shared18><LegacyContainer2 title="g17" /></div>;
}
export default Glue17;
