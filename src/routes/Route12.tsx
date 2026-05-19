
import { Tasks10 } from "../entities/tasks/components/Tasks10";
import { Tasks11 } from "../entities/tasks/components/Tasks11";
import Glue13 from "../shared/glue/glue-13";
import { Shared13 } from "../shared/components/Shared13";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route12() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R12 (tasks) ({ALL_PREFIXES.length} utils)</h1>
      <Tasks10 label="r12-a" />
      <Tasks11 label="r12-b" />
      <Glue13 value="r12" />
      <Shared13>route</Shared13>
      <Legacy title="r12-barrel" />
      <LegacyContainer13 title="r12" />
    </div>
  );
}
