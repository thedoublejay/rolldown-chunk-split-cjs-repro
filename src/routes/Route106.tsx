
import { Metrics4 } from "../entities/metrics/components/Metrics4";
import { Metrics5 } from "../entities/metrics/components/Metrics5";
import Glue7 from "../shared/glue/glue-7";
import { Shared27 } from "../shared/components/Shared27";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route106() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R106 (metrics) ({ALL_PREFIXES.length} utils)</h1>
      <Metrics4 label="r106-a" />
      <Metrics5 label="r106-b" />
      <Glue7 value="r106" />
      <Shared27>route</Shared27>
      <Legacy title="r106-barrel" />
      
    </div>
  );
}
