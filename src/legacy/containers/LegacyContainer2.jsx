
import LegacyButton from "../components/LegacyButton";
import LegacyComp3 from "../components/LegacyComp3";
import LegacyComp8 from "../components/LegacyComp8";
import get from "lodash/get";
export default function LegacyContainer2(props) {
  return <div><h2>LC2: {get(props, ["title"], "untitled")}</h2><LegacyComp3 initial="a" showButton /><LegacyComp8 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
