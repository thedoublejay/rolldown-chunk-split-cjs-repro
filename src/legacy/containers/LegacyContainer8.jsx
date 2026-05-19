
import LegacyButton from "../components/LegacyButton";
import LegacyComp9 from "../components/LegacyComp9";
import LegacyComp14 from "../components/LegacyComp14";
import get from "lodash/get";
export default function LegacyContainer8(props) {
  return <div><h2>LC8: {get(props, ["title"], "untitled")}</h2><LegacyComp9 initial="a" showButton /><LegacyComp14 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
