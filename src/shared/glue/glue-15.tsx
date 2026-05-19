
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer16 from "../../legacy/containers/LegacyContainer16";
import { Shared16 } from "../components/Shared16";
import { utilFn16 } from "../utils/util-16";
import { useStore6 } from "../stores/store-6";

export const GLUE_15 = _.toUpper("glue-15");
export function Glue15({ value }) {
  const count = useStore6(s => s.count);
  return <div><p>{GLUE_15} {get({value}, ["value"], "")} {utilFn16({value}, ["value"], "")} {count}</p><Shared16>glue</Shared16><LegacyContainer16 title="g15" /></div>;
}
export default Glue15;
