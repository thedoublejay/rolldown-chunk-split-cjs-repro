
import LegacyButton from "../components/LegacyButton";
import LegacyComp12 from "../components/LegacyComp12";
import LegacyComp17 from "../components/LegacyComp17";
import get from "lodash/get";
export default function LegacyContainer11(props) {
  return <div><h2>LC11: {get(props, ["title"], "untitled")}</h2><LegacyComp12 initial="a" showButton /><LegacyComp17 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
