
import { Projects4 } from "../entities/projects/components/Projects4";
import { Projects5 } from "../entities/projects/components/Projects5";
import Glue15 from "../shared/glue/glue-15";
import { Shared15 } from "../shared/components/Shared15";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route14() {
  const Legacy = ALL_LEGACY.LegacyContainer16;
  return (
    <div>
      <h1>R14 (projects) ({ALL_PREFIXES.length} utils)</h1>
      <Projects4 label="r14-a" />
      <Projects5 label="r14-b" />
      <Glue15 value="r14" />
      <Shared15>route</Shared15>
      <Legacy title="r14-barrel" />
      
    </div>
  );
}
