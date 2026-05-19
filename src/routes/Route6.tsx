
import { Documents4 } from "../entities/documents/components/Documents4";
import { Documents5 } from "../entities/documents/components/Documents5";
import Glue7 from "../shared/glue/glue-7";
import { Shared7 } from "../shared/components/Shared7";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route6() {
  const Legacy = ALL_LEGACY.LegacyContainer8;
  return (
    <div>
      <h1>R6 (documents) ({ALL_PREFIXES.length} utils)</h1>
      <Documents4 label="r6-a" />
      <Documents5 label="r6-b" />
      <Glue7 value="r6" />
      <Shared7>route</Shared7>
      <Legacy title="r6-barrel" />
      
    </div>
  );
}
