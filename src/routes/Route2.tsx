
import { Alerts4 } from "../entities/alerts/components/Alerts4";
import { Alerts5 } from "../entities/alerts/components/Alerts5";
import Glue3 from "../shared/glue/glue-3";
import { Shared3 } from "../shared/components/Shared3";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route2() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R2 (alerts) ({ALL_PREFIXES.length} utils)</h1>
      <Alerts4 label="r2-a" />
      <Alerts5 label="r2-b" />
      <Glue3 value="r2" />
      <Shared3>route</Shared3>
      <Legacy title="r2-barrel" />
      
    </div>
  );
}
