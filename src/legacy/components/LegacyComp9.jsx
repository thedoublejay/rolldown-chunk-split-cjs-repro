
import { useState } from "react";
import get from "lodash/get";
import has from "lodash/has";
import LegacyButton from "./LegacyButton";
export default function LegacyComp9(props) {
  const [val, setVal] = useState(get(props, ["initial"], ""));
  return <div><input value={val} onChange={(e) => setVal(e.target.value)} />{has(props, ["showButton"]) ? <LegacyButton btnType="primary">L9</LegacyButton> : null}</div>;
}
