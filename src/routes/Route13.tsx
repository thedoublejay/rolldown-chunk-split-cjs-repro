
import { Projects1 } from "../entities/projects/components/Projects1";
import { Projects2 } from "../entities/projects/components/Projects2";
import Glue14 from "../shared/glue/glue-14";
import { Shared14 } from "../shared/components/Shared14";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route13() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R13 (projects) ({ALL_PREFIXES.length} utils)</h1>
      <Projects1 label="r13-a" />
      <Projects2 label="r13-b" />
      <Glue14 value="r13" />
      <Shared14>route</Shared14>
      <Legacy title="r13-barrel" />
      
    </div>
  );
}
