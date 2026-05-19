
import { Library1 } from "../entities/library/components/Library1";
import { Library2 } from "../entities/library/components/Library2";
import Glue4 from "../shared/glue/glue-4";
import { Shared14 } from "../shared/components/Shared14";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route53() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R53 (library) ({ALL_PREFIXES.length} utils)</h1>
      <Library1 label="r53-a" />
      <Library2 label="r53-b" />
      <Glue4 value="r53" />
      <Shared14>route</Shared14>
      <Legacy title="r53-barrel" />
      
    </div>
  );
}
