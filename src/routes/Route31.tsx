
import { Settings7 } from "../entities/settings/components/Settings7";
import { Settings8 } from "../entities/settings/components/Settings8";
import Glue32 from "../shared/glue/glue-32";
import { Shared32 } from "../shared/components/Shared32";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route31() {
  const Legacy = ALL_LEGACY.LegacyContainer1;
  return (
    <div>
      <h1>R31 (settings) ({ALL_PREFIXES.length} utils)</h1>
      <Settings7 label="r31-a" />
      <Settings8 label="r31-b" />
      <Glue32 value="r31" />
      <Shared32>route</Shared32>
      <Legacy title="r31-barrel" />
      
    </div>
  );
}
