
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer8 from "../../legacy/containers/LegacyContainer8";
import { Shared8 } from "../components/Shared8";
import { utilFn8 } from "../utils/util-8";
import { useStore8 } from "../stores/store-8";

export const GLUE_7 = _.toUpper("glue-7");
export function Glue7({ value }) {
  const count = useStore8(s => s.count);
  return <div><p>{GLUE_7} {get({value}, ["value"], "")} {utilFn8({value}, ["value"], "")} {count}</p><Shared8>glue</Shared8><LegacyContainer8 title="g7" /></div>;
}
export default Glue7;
