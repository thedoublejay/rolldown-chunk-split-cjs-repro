
import LegacyButton from "../components/LegacyButton";
import LegacyComp15 from "../components/LegacyComp15";
import LegacyComp20 from "../components/LegacyComp20";
import get from "lodash/get";
export default function LegacyContainer14(props) {
  return <div><h2>LC14: {get(props, ["title"], "untitled")}</h2><LegacyComp15 initial="a" showButton /><LegacyComp20 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
