
import { Dashboard7 } from "../entities/dashboard/components/Dashboard7";
import { Dashboard8 } from "../entities/dashboard/components/Dashboard8";
import Glue2 from "../shared/glue/glue-2";
import { Shared12 } from "../shared/components/Shared12";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route51() {
  const Legacy = ALL_LEGACY.LegacyContainer5;
  return (
    <div>
      <h1>R51 (dashboard) ({ALL_PREFIXES.length} utils)</h1>
      <Dashboard7 label="r51-a" />
      <Dashboard8 label="r51-b" />
      <Glue2 value="r51" />
      <Shared12>route</Shared12>
      <Legacy title="r51-barrel" />
      
    </div>
  );
}
