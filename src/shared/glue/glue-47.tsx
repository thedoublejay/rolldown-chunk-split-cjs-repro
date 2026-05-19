
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer16 from "../../legacy/containers/LegacyContainer16";
import { Shared8 } from "../components/Shared8";
import { utilFn8 } from "../utils/util-8";
import { useStore8 } from "../stores/store-8";

export const GLUE_47 = _.toUpper("glue-47");
export function Glue47({ value }) {
  const count = useStore8(s => s.count);
  return <div><p>{GLUE_47} {get({value}, ["value"], "")} {utilFn8({value}, ["value"], "")} {count}</p><Shared8>glue</Shared8><LegacyContainer16 title="g47" /></div>;
}
export default Glue47;
