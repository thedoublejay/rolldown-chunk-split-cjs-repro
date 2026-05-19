
import _ from "lodash";
import get from "lodash/get";
import LegacyContainer12 from "../../legacy/containers/LegacyContainer12";
import { Shared28 } from "../components/Shared28";
import { utilFn8 } from "../utils/util-8";
import { useStore8 } from "../stores/store-8";

export const GLUE_27 = _.toUpper("glue-27");
export function Glue27({ value }) {
  const count = useStore8(s => s.count);
  return <div><p>{GLUE_27} {get({value}, ["value"], "")} {utilFn8({value}, ["value"], "")} {count}</p><Shared28>glue</Shared28><LegacyContainer12 title="g27" /></div>;
}
export default Glue27;
