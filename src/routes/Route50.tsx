
import { Dashboard4 } from "../entities/dashboard/components/Dashboard4";
import { Dashboard5 } from "../entities/dashboard/components/Dashboard5";
import Glue1 from "../shared/glue/glue-1";
import { Shared11 } from "../shared/components/Shared11";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route50() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R50 (dashboard) ({ALL_PREFIXES.length} utils)</h1>
      <Dashboard4 label="r50-a" />
      <Dashboard5 label="r50-b" />
      <Glue1 value="r50" />
      <Shared11>route</Shared11>
      <Legacy title="r50-barrel" />
      
    </div>
  );
}
