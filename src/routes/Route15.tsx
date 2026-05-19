
import { Projects7 } from "../entities/projects/components/Projects7";
import { Projects8 } from "../entities/projects/components/Projects8";
import Glue16 from "../shared/glue/glue-16";
import { Shared16 } from "../shared/components/Shared16";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route15() {
  const Legacy = ALL_LEGACY.LegacyContainer1;
  return (
    <div>
      <h1>R15 (projects) ({ALL_PREFIXES.length} utils)</h1>
      <Projects7 label="r15-a" />
      <Projects8 label="r15-b" />
      <Glue16 value="r15" />
      <Shared16>route</Shared16>
      <Legacy title="r15-barrel" />
      
    </div>
  );
}
