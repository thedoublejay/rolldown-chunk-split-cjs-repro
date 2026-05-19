
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer14 from "../../legacy/containers/LegacyContainer14";
import { Shared30 } from "../components/Shared30";
import { utilFn10 } from "../utils/util-10";
import { useStore10 } from "../stores/store-10";

export const GLUE_29 = _.toUpper("glue-29");
export function Glue29({ value }) {
  const count = useStore10(s => s.count);
  return <div><p>{GLUE_29} {get({value}, ["value"], "")} {utilFn10({value}, ["value"], "")} {count}</p><Shared30>glue</Shared30><LegacyContainer14 title="g29" /></div>;
}
export default Glue29;
