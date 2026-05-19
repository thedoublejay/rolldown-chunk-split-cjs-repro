
import LegacyButton from "../components/LegacyButton";
import LegacyComp16 from "../components/LegacyComp16";
import LegacyComp21 from "../components/LegacyComp21";
import get from "lodash/get";
export default function LegacyContainer15(props) {
  return <div><h2>LC15: {get(props, ["title"], "untitled")}</h2><LegacyComp16 initial="a" showButton /><LegacyComp21 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
