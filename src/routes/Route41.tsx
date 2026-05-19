
import { Campaigns1 } from "../entities/campaigns/components/Campaigns1";
import { Campaigns2 } from "../entities/campaigns/components/Campaigns2";
import Glue42 from "../shared/glue/glue-42";
import { Shared2 } from "../shared/components/Shared2";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route41() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R41 (campaigns) ({ALL_PREFIXES.length} utils)</h1>
      <Campaigns1 label="r41-a" />
      <Campaigns2 label="r41-b" />
      <Glue42 value="r41" />
      <Shared2>route</Shared2>
      <Legacy title="r41-barrel" />
      
    </div>
  );
}
