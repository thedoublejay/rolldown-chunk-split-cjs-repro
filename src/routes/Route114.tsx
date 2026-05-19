
import { Queues4 } from "../entities/queues/components/Queues4";
import { Queues5 } from "../entities/queues/components/Queues5";
import Glue15 from "../shared/glue/glue-15";
import { Shared35 } from "../shared/components/Shared35";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route114() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R114 (queues) ({ALL_PREFIXES.length} utils)</h1>
      <Queues4 label="r114-a" />
      <Queues5 label="r114-b" />
      <Glue15 value="r114" />
      <Shared35>route</Shared35>
      <Legacy title="r114-barrel" />
      
    </div>
  );
}
