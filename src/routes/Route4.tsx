
import { Alerts10 } from "../entities/alerts/components/Alerts10";
import { Alerts11 } from "../entities/alerts/components/Alerts11";
import Glue5 from "../shared/glue/glue-5";
import { Shared5 } from "../shared/components/Shared5";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route4() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R4 (alerts) ({ALL_PREFIXES.length} utils)</h1>
      <Alerts10 label="r4-a" />
      <Alerts11 label="r4-b" />
      <Glue5 value="r4" />
      <Shared5>route</Shared5>
      <Legacy title="r4-barrel" />
      <LegacyContainer5 title="r4" />
    </div>
  );
}
