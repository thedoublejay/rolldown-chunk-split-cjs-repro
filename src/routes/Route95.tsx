
import { Filters7 } from "../entities/filters/components/Filters7";
import { Filters8 } from "../entities/filters/components/Filters8";
import Glue46 from "../shared/glue/glue-46";
import { Shared16 } from "../shared/components/Shared16";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route95() {
  const Legacy = ALL_LEGACY.LegacyContainer1;
  return (
    <div>
      <h1>R95 (filters) ({ALL_PREFIXES.length} utils)</h1>
      <Filters7 label="r95-a" />
      <Filters8 label="r95-b" />
      <Glue46 value="r95" />
      <Shared16>route</Shared16>
      <Legacy title="r95-barrel" />
      
    </div>
  );
}
