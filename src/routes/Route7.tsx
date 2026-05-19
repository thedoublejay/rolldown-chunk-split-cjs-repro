
import { Documents7 } from "../entities/documents/components/Documents7";
import { Documents8 } from "../entities/documents/components/Documents8";
import Glue8 from "../shared/glue/glue-8";
import { Shared8 } from "../shared/components/Shared8";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route7() {
  const Legacy = ALL_LEGACY.LegacyContainer9;
  return (
    <div>
      <h1>R7 (documents) ({ALL_PREFIXES.length} utils)</h1>
      <Documents7 label="r7-a" />
      <Documents8 label="r7-b" />
      <Glue8 value="r7" />
      <Shared8>route</Shared8>
      <Legacy title="r7-barrel" />
      
    </div>
  );
}
