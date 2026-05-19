
import { Filters4 } from "../entities/filters/components/Filters4";
import { Filters5 } from "../entities/filters/components/Filters5";
import Glue45 from "../shared/glue/glue-45";
import { Shared15 } from "../shared/components/Shared15";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route94() {
  const Legacy = ALL_LEGACY.LegacyContainer16;
  return (
    <div>
      <h1>R94 (filters) ({ALL_PREFIXES.length} utils)</h1>
      <Filters4 label="r94-a" />
      <Filters5 label="r94-b" />
      <Glue45 value="r94" />
      <Shared15>route</Shared15>
      <Legacy title="r94-barrel" />
      
    </div>
  );
}
