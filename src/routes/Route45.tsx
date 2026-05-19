
import { Analytics1 } from "../entities/analytics/components/Analytics1";
import { Analytics2 } from "../entities/analytics/components/Analytics2";
import Glue46 from "../shared/glue/glue-46";
import { Shared6 } from "../shared/components/Shared6";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route45() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R45 (analytics) ({ALL_PREFIXES.length} utils)</h1>
      <Analytics1 label="r45-a" />
      <Analytics2 label="r45-b" />
      <Glue46 value="r45" />
      <Shared6>route</Shared6>
      <Legacy title="r45-barrel" />
      
    </div>
  );
}
