
import LegacyButton from "../components/LegacyButton";
import LegacyComp4 from "../components/LegacyComp4";
import LegacyComp9 from "../components/LegacyComp9";
import get from "lodash/get";
export default function LegacyContainer3(props) {
  return <div><h2>LC3: {get(props, ["title"], "untitled")}</h2><LegacyComp4 initial="a" showButton /><LegacyComp9 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
