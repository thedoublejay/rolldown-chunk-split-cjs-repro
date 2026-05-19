
import { Tasks1 } from "../entities/tasks/components/Tasks1";
import { Tasks2 } from "../entities/tasks/components/Tasks2";
import Glue10 from "../shared/glue/glue-10";
import { Shared10 } from "../shared/components/Shared10";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route9() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R9 (tasks) ({ALL_PREFIXES.length} utils)</h1>
      <Tasks1 label="r9-a" />
      <Tasks2 label="r9-b" />
      <Glue10 value="r9" />
      <Shared10>route</Shared10>
      <Legacy title="r9-barrel" />
      
    </div>
  );
}
