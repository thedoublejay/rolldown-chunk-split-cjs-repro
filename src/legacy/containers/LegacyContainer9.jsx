
import LegacyButton from "../components/LegacyButton";
import LegacyComp10 from "../components/LegacyComp10";
import LegacyComp15 from "../components/LegacyComp15";
import get from "lodash/get";
export default function LegacyContainer9(props) {
  return <div><h2>LC9: {get(props, ["title"], "untitled")}</h2><LegacyComp10 initial="a" showButton /><LegacyComp15 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
