
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer4 from "../../legacy/containers/LegacyContainer4";
import { Shared20 } from "../components/Shared20";
import { utilFn20 } from "../utils/util-20";
import { useStore10 } from "../stores/store-10";

export const GLUE_19 = _.toUpper("glue-19");
export function Glue19({ value }) {
  const count = useStore10(s => s.count);
  return <div><p>{GLUE_19} {get({value}, ["value"], "")} {utilFn20({value}, ["value"], "")} {count}</p><Shared20>glue</Shared20><LegacyContainer4 title="g19" /></div>;
}
export default Glue19;
