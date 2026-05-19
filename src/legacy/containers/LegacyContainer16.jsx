
import LegacyButton from "../components/LegacyButton";
import LegacyComp17 from "../components/LegacyComp17";
import LegacyComp22 from "../components/LegacyComp22";
import get from "lodash/get";
export default function LegacyContainer16(props) {
  return <div><h2>LC16: {get(props, ["title"], "untitled")}</h2><LegacyComp17 initial="a" showButton /><LegacyComp22 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
