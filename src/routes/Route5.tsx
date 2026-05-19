
import { Documents1 } from "../entities/documents/components/Documents1";
import { Documents2 } from "../entities/documents/components/Documents2";
import Glue6 from "../shared/glue/glue-6";
import { Shared6 } from "../shared/components/Shared6";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route5() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R5 (documents) ({ALL_PREFIXES.length} utils)</h1>
      <Documents1 label="r5-a" />
      <Documents2 label="r5-b" />
      <Glue6 value="r5" />
      <Shared6>route</Shared6>
      <Legacy title="r5-barrel" />
      
    </div>
  );
}
