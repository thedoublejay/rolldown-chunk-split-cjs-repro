
import LegacyButton from "../components/LegacyButton";
import LegacyComp11 from "../components/LegacyComp11";
import LegacyComp16 from "../components/LegacyComp16";
import get from "lodash/get";
export default function LegacyContainer10(props) {
  return <div><h2>LC10: {get(props, ["title"], "untitled")}</h2><LegacyComp11 initial="a" showButton /><LegacyComp16 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
