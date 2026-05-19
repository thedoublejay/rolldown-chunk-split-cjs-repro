
import { Metrics7 } from "../entities/metrics/components/Metrics7";
import { Metrics8 } from "../entities/metrics/components/Metrics8";
import Glue8 from "../shared/glue/glue-8";
import { Shared28 } from "../shared/components/Shared28";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route107() {
  const Legacy = ALL_LEGACY.LegacyContainer13;
  return (
    <div>
      <h1>R107 (metrics) ({ALL_PREFIXES.length} utils)</h1>
      <Metrics7 label="r107-a" />
      <Metrics8 label="r107-b" />
      <Glue8 value="r107" />
      <Shared28>route</Shared28>
      <Legacy title="r107-barrel" />
      
    </div>
  );
}
