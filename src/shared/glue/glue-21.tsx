
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer6 from "../../legacy/containers/LegacyContainer6";
import { Shared22 } from "../components/Shared22";
import { utilFn2 } from "../utils/util-2";
import { useStore2 } from "../stores/store-2";

export const GLUE_21 = _.toUpper("glue-21");
export function Glue21({ value }) {
  const count = useStore2(s => s.count);
  return <div><p>{GLUE_21} {get({value}, ["value"], "")} {utilFn2({value}, ["value"], "")} {count}</p><Shared22>glue</Shared22><LegacyContainer6 title="g21" /></div>;
}
export default Glue21;
