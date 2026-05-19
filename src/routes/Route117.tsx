
import { Workflows1 } from "../entities/workflows/components/Workflows1";
import { Workflows2 } from "../entities/workflows/components/Workflows2";
import Glue18 from "../shared/glue/glue-18";
import { Shared38 } from "../shared/components/Shared38";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route117() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R117 (workflows) ({ALL_PREFIXES.length} utils)</h1>
      <Workflows1 label="r117-a" />
      <Workflows2 label="r117-b" />
      <Glue18 value="r117" />
      <Shared38>route</Shared38>
      <Legacy title="r117-barrel" />
      
    </div>
  );
}
