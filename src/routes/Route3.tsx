
import { Alerts7 } from "../entities/alerts/components/Alerts7";
import { Alerts8 } from "../entities/alerts/components/Alerts8";
import Glue4 from "../shared/glue/glue-4";
import { Shared4 } from "../shared/components/Shared4";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route3() {
  const Legacy = ALL_LEGACY.LegacyContainer5;
  return (
    <div>
      <h1>R3 (alerts) ({ALL_PREFIXES.length} utils)</h1>
      <Alerts7 label="r3-a" />
      <Alerts8 label="r3-b" />
      <Glue4 value="r3" />
      <Shared4>route</Shared4>
      <Legacy title="r3-barrel" />
      
    </div>
  );
}
