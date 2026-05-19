
import { Settings1 } from "../entities/settings/components/Settings1";
import { Settings2 } from "../entities/settings/components/Settings2";
import Glue30 from "../shared/glue/glue-30";
import { Shared30 } from "../shared/components/Shared30";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route29() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R29 (settings) ({ALL_PREFIXES.length} utils)</h1>
      <Settings1 label="r29-a" />
      <Settings2 label="r29-b" />
      <Glue30 value="r29" />
      <Shared30>route</Shared30>
      <Legacy title="r29-barrel" />
      
    </div>
  );
}
