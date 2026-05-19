
import LegacyButton from "../components/LegacyButton";
import LegacyComp6 from "../components/LegacyComp6";
import LegacyComp11 from "../components/LegacyComp11";
import get from "lodash/get";
export default function LegacyContainer5(props) {
  return <div><h2>LC5: {get(props, ["title"], "untitled")}</h2><LegacyComp6 initial="a" showButton /><LegacyComp11 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
