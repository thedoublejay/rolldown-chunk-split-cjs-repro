
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer2 from "../../legacy/containers/LegacyContainer2";
import { Shared34 } from "../components/Shared34";
import { utilFn14 } from "../utils/util-14";
import { useStore4 } from "../stores/store-4";

export const GLUE_33 = _.toUpper("glue-33");
export function Glue33({ value }) {
  const count = useStore4(s => s.count);
  return <div><p>{GLUE_33} {get({value}, ["value"], "")} {utilFn14({value}, ["value"], "")} {count}</p><Shared34>glue</Shared34><LegacyContainer2 title="g33" /></div>;
}
export default Glue33;
