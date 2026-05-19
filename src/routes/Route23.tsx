
import { Reports7 } from "../entities/reports/components/Reports7";
import { Reports8 } from "../entities/reports/components/Reports8";
import Glue24 from "../shared/glue/glue-24";
import { Shared24 } from "../shared/components/Shared24";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route23() {
  const Legacy = ALL_LEGACY.LegacyContainer9;
  return (
    <div>
      <h1>R23 (reports) ({ALL_PREFIXES.length} utils)</h1>
      <Reports7 label="r23-a" />
      <Reports8 label="r23-b" />
      <Glue24 value="r23" />
      <Shared24>route</Shared24>
      <Legacy title="r23-barrel" />
      
    </div>
  );
}
