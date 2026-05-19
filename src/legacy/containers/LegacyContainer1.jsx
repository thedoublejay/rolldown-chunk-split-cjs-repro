
import LegacyButton from "../components/LegacyButton";
import LegacyComp2 from "../components/LegacyComp2";
import LegacyComp7 from "../components/LegacyComp7";
import get from "lodash/get";
export default function LegacyContainer1(props) {
  return <div><h2>LC1: {get(props, ["title"], "untitled")}</h2><LegacyComp2 initial="a" showButton /><LegacyComp7 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
