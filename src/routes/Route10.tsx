
import { Tasks4 } from "../entities/tasks/components/Tasks4";
import { Tasks5 } from "../entities/tasks/components/Tasks5";
import Glue11 from "../shared/glue/glue-11";
import { Shared11 } from "../shared/components/Shared11";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route10() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R10 (tasks) ({ALL_PREFIXES.length} utils)</h1>
      <Tasks4 label="r10-a" />
      <Tasks5 label="r10-b" />
      <Glue11 value="r10" />
      <Shared11>route</Shared11>
      <Legacy title="r10-barrel" />
      
    </div>
  );
}
