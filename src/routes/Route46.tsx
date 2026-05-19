
import { Analytics4 } from "../entities/analytics/components/Analytics4";
import { Analytics5 } from "../entities/analytics/components/Analytics5";
import Glue47 from "../shared/glue/glue-47";
import { Shared7 } from "../shared/components/Shared7";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route46() {
  const Legacy = ALL_LEGACY.LegacyContainer16;
  return (
    <div>
      <h1>R46 (analytics) ({ALL_PREFIXES.length} utils)</h1>
      <Analytics4 label="r46-a" />
      <Analytics5 label="r46-b" />
      <Glue47 value="r46" />
      <Shared7>route</Shared7>
      <Legacy title="r46-barrel" />
      
    </div>
  );
}
