
import { Tasks7 } from "../entities/tasks/components/Tasks7";
import { Tasks8 } from "../entities/tasks/components/Tasks8";
import Glue12 from "../shared/glue/glue-12";
import { Shared12 } from "../shared/components/Shared12";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route11() {
  const Legacy = ALL_LEGACY.LegacyContainer13;
  return (
    <div>
      <h1>R11 (tasks) ({ALL_PREFIXES.length} utils)</h1>
      <Tasks7 label="r11-a" />
      <Tasks8 label="r11-b" />
      <Glue12 value="r11" />
      <Shared12>route</Shared12>
      <Legacy title="r11-barrel" />
      
    </div>
  );
}
