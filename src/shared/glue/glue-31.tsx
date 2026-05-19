
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer16 from "../../legacy/containers/LegacyContainer16";
import { Shared32 } from "../components/Shared32";
import { utilFn12 } from "../utils/util-12";
import { useStore2 } from "../stores/store-2";

export const GLUE_31 = _.toUpper("glue-31");
export function Glue31({ value }) {
  const count = useStore2(s => s.count);
  return <div><p>{GLUE_31} {get({value}, ["value"], "")} {utilFn12({value}, ["value"], "")} {count}</p><Shared32>glue</Shared32><LegacyContainer16 title="g31" /></div>;
}
export default Glue31;
