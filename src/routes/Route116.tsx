
import { Queues10 } from "../entities/queues/components/Queues10";
import { Queues11 } from "../entities/queues/components/Queues11";
import Glue17 from "../shared/glue/glue-17";
import { Shared37 } from "../shared/components/Shared37";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route116() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R116 (queues) ({ALL_PREFIXES.length} utils)</h1>
      <Queues10 label="r116-a" />
      <Queues11 label="r116-b" />
      <Glue17 value="r116" />
      <Shared37>route</Shared37>
      <Legacy title="r116-barrel" />
      <LegacyContainer5 title="r116" />
    </div>
  );
}
