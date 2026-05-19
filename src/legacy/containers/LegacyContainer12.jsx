
import LegacyButton from "../components/LegacyButton";
import LegacyComp13 from "../components/LegacyComp13";
import LegacyComp18 from "../components/LegacyComp18";
import get from "lodash/get";
export default function LegacyContainer12(props) {
  return <div><h2>LC12: {get(props, ["title"], "untitled")}</h2><LegacyComp13 initial="a" showButton /><LegacyComp18 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
