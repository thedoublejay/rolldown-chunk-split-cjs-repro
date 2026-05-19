
import { Filters1 } from "../entities/filters/components/Filters1";
import { Filters2 } from "../entities/filters/components/Filters2";
import Glue44 from "../shared/glue/glue-44";
import { Shared14 } from "../shared/components/Shared14";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route93() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R93 (filters) ({ALL_PREFIXES.length} utils)</h1>
      <Filters1 label="r93-a" />
      <Filters2 label="r93-b" />
      <Glue44 value="r93" />
      <Shared14>route</Shared14>
      <Legacy title="r93-barrel" />
      
    </div>
  );
}
