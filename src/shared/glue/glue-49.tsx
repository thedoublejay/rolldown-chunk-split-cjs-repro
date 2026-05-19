
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer2 from "../../legacy/containers/LegacyContainer2";
import { Shared10 } from "../components/Shared10";
import { utilFn10 } from "../utils/util-10";
import { useStore10 } from "../stores/store-10";

export const GLUE_49 = _.toUpper("glue-49");
export function Glue49({ value }) {
  const count = useStore10(s => s.count);
  return <div><p>{GLUE_49} {get({value}, ["value"], "")} {utilFn10({value}, ["value"], "")} {count}</p><Shared10>glue</Shared10><LegacyContainer2 title="g49" /></div>;
}
export default Glue49;
