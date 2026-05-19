
import { Campaigns4 } from "../entities/campaigns/components/Campaigns4";
import { Campaigns5 } from "../entities/campaigns/components/Campaigns5";
import Glue43 from "../shared/glue/glue-43";
import { Shared3 } from "../shared/components/Shared3";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route42() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R42 (campaigns) ({ALL_PREFIXES.length} utils)</h1>
      <Campaigns4 label="r42-a" />
      <Campaigns5 label="r42-b" />
      <Glue43 value="r42" />
      <Shared3>route</Shared3>
      <Legacy title="r42-barrel" />
      
    </div>
  );
}
