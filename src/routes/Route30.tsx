
import { Settings4 } from "../entities/settings/components/Settings4";
import { Settings5 } from "../entities/settings/components/Settings5";
import Glue31 from "../shared/glue/glue-31";
import { Shared31 } from "../shared/components/Shared31";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route30() {
  const Legacy = ALL_LEGACY.LegacyContainer16;
  return (
    <div>
      <h1>R30 (settings) ({ALL_PREFIXES.length} utils)</h1>
      <Settings4 label="r30-a" />
      <Settings5 label="r30-b" />
      <Glue31 value="r30" />
      <Shared31>route</Shared31>
      <Legacy title="r30-barrel" />
      
    </div>
  );
}
