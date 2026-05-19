
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer8 from "../../legacy/containers/LegacyContainer8";
import { Shared24 } from "../components/Shared24";
import { utilFn4 } from "../utils/util-4";
import { useStore4 } from "../stores/store-4";

export const GLUE_23 = _.toUpper("glue-23");
export function Glue23({ value }) {
  const count = useStore4(s => s.count);
  return <div><p>{GLUE_23} {get({value}, ["value"], "")} {utilFn4({value}, ["value"], "")} {count}</p><Shared24>glue</Shared24><LegacyContainer8 title="g23" /></div>;
}
export default Glue23;
