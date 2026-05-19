
import { Campaigns7 } from "../entities/campaigns/components/Campaigns7";
import { Campaigns8 } from "../entities/campaigns/components/Campaigns8";
import Glue44 from "../shared/glue/glue-44";
import { Shared4 } from "../shared/components/Shared4";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route43() {
  const Legacy = ALL_LEGACY.LegacyContainer13;
  return (
    <div>
      <h1>R43 (campaigns) ({ALL_PREFIXES.length} utils)</h1>
      <Campaigns7 label="r43-a" />
      <Campaigns8 label="r43-b" />
      <Glue44 value="r43" />
      <Shared4>route</Shared4>
      <Legacy title="r43-barrel" />
      
    </div>
  );
}
