
import LegacyButton from "../components/LegacyButton";
import LegacyComp8 from "../components/LegacyComp8";
import LegacyComp13 from "../components/LegacyComp13";
import get from "lodash/get";
export default function LegacyContainer7(props) {
  return <div><h2>LC7: {get(props, ["title"], "untitled")}</h2><LegacyComp8 initial="a" showButton /><LegacyComp13 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
