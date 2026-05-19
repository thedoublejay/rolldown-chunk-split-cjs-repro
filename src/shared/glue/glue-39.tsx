
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer8 from "../../legacy/containers/LegacyContainer8";
import { Shared40 } from "../components/Shared40";
import { utilFn20 } from "../utils/util-20";
import { useStore10 } from "../stores/store-10";

export const GLUE_39 = _.toUpper("glue-39");
export function Glue39({ value }) {
  const count = useStore10(s => s.count);
  return <div><p>{GLUE_39} {get({value}, ["value"], "")} {utilFn20({value}, ["value"], "")} {count}</p><Shared40>glue</Shared40><LegacyContainer8 title="g39" /></div>;
}
export default Glue39;
