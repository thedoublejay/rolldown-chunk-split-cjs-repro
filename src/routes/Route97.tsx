
import { Exports1 } from "../entities/exports/components/Exports1";
import { Exports2 } from "../entities/exports/components/Exports2";
import Glue48 from "../shared/glue/glue-48";
import { Shared18 } from "../shared/components/Shared18";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route97() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R97 (exports) ({ALL_PREFIXES.length} utils)</h1>
      <Exports1 label="r97-a" />
      <Exports2 label="r97-b" />
      <Glue48 value="r97" />
      <Shared18>route</Shared18>
      <Legacy title="r97-barrel" />
      
    </div>
  );
}
