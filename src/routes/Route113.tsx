
import { Queues1 } from "../entities/queues/components/Queues1";
import { Queues2 } from "../entities/queues/components/Queues2";
import Glue14 from "../shared/glue/glue-14";
import { Shared34 } from "../shared/components/Shared34";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route113() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R113 (queues) ({ALL_PREFIXES.length} utils)</h1>
      <Queues1 label="r113-a" />
      <Queues2 label="r113-b" />
      <Glue14 value="r113" />
      <Shared34>route</Shared34>
      <Legacy title="r113-barrel" />
      
    </div>
  );
}
