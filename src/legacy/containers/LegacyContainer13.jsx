
import LegacyButton from "../components/LegacyButton";
import LegacyComp14 from "../components/LegacyComp14";
import LegacyComp19 from "../components/LegacyComp19";
import get from "lodash/get";
export default function LegacyContainer13(props) {
  return <div><h2>LC13: {get(props, ["title"], "untitled")}</h2><LegacyComp14 initial="a" showButton /><LegacyComp19 initial="b" /><LegacyButton btnType="primary">Done</LegacyButton></div>;
}
