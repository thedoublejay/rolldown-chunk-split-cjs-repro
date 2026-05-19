
import { Alerts1 } from "../entities/alerts/components/Alerts1";
import { Alerts2 } from "../entities/alerts/components/Alerts2";
import Glue2 from "../shared/glue/glue-2";
import { Shared2 } from "../shared/components/Shared2";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route1() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R1 (alerts) ({ALL_PREFIXES.length} utils)</h1>
      <Alerts1 label="r1-a" />
      <Alerts2 label="r1-b" />
      <Glue2 value="r1" />
      <Shared2>route</Shared2>
      <Legacy title="r1-barrel" />
      
    </div>
  );
}
