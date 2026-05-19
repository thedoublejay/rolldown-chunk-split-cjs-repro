
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer10 from "../../legacy/containers/LegacyContainer10";
import { Shared26 } from "../components/Shared26";
import { utilFn6 } from "../utils/util-6";
import { useStore6 } from "../stores/store-6";

export const GLUE_25 = _.toUpper("glue-25");
export function Glue25({ value }) {
  const count = useStore6(s => s.count);
  return <div><p>{GLUE_25} {get({value}, ["value"], "")} {utilFn6({value}, ["value"], "")} {count}</p><Shared26>glue</Shared26><LegacyContainer10 title="g25" /></div>;
}
export default Glue25;
