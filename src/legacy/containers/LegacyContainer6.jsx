
import LegacyButton from "../components/LegacyButton";
import LegacyComp7 from "../components/LegacyComp7";
import LegacyComp12 from "../components/LegacyComp12";
import get from "lodash/get";
export default function LegacyContainer6(props) {
  return <div><h2>LC6: {get(props, ["title"], "untitled")}</h2><LegacyComp7 initial="a" showButton /><LegacyComp12 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
