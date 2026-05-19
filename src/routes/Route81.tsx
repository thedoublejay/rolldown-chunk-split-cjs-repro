
import { Logs1 } from "../entities/logs/components/Logs1";
import { Logs2 } from "../entities/logs/components/Logs2";
import Glue32 from "../shared/glue/glue-32";
import { Shared2 } from "../shared/components/Shared2";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route81() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R81 (logs) ({ALL_PREFIXES.length} utils)</h1>
      <Logs1 label="r81-a" />
      <Logs2 label="r81-b" />
      <Glue32 value="r81" />
      <Shared2>route</Shared2>
      <Legacy title="r81-barrel" />
      
    </div>
  );
}
