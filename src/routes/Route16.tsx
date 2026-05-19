
import { Projects10 } from "../entities/projects/components/Projects10";
import { Projects11 } from "../entities/projects/components/Projects11";
import Glue17 from "../shared/glue/glue-17";
import { Shared17 } from "../shared/components/Shared17";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";

export default function Route16() {
  const Legacy = ALL_LEGACY.LegacyContainer2;
  return (
    <div>
      <h1>R16 (projects) ({ALL_PREFIXES.length} utils)</h1>
      <Projects10 label="r16-a" />
      <Projects11 label="r16-b" />
      <Glue17 value="r16" />
      <Shared17>route</Shared17>
      <Legacy title="r16-barrel" />
      <LegacyContainer1 title="r16" />
    </div>
  );
}
