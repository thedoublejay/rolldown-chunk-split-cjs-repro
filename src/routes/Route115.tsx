
import { Queues7 } from "../entities/queues/components/Queues7";
import { Queues8 } from "../entities/queues/components/Queues8";
import Glue16 from "../shared/glue/glue-16";
import { Shared36 } from "../shared/components/Shared36";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route115() {
  const Legacy = ALL_LEGACY.LegacyContainer5;
  return (
    <div>
      <h1>R115 (queues) ({ALL_PREFIXES.length} utils)</h1>
      <Queues7 label="r115-a" />
      <Queues8 label="r115-b" />
      <Glue16 value="r115" />
      <Shared36>route</Shared36>
      <Legacy title="r115-barrel" />
      
    </div>
  );
}
