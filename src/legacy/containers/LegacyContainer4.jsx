
import LegacyButton from "../components/LegacyButton";
import LegacyComp5 from "../components/LegacyComp5";
import LegacyComp10 from "../components/LegacyComp10";
import get from "lodash/get";
export default function LegacyContainer4(props) {
  return <div><h2>LC4: {get(props, ["title"], "untitled")}</h2><LegacyComp5 initial="a" showButton /><LegacyComp10 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
