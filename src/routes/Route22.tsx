
import { Reports4 } from "../entities/reports/components/Reports4";
import { Reports5 } from "../entities/reports/components/Reports5";
import Glue23 from "../shared/glue/glue-23";
import { Shared23 } from "../shared/components/Shared23";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route22() {
  const Legacy = ALL_LEGACY.LegacyContainer8;
  return (
    <div>
      <h1>R22 (reports) ({ALL_PREFIXES.length} utils)</h1>
      <Reports4 label="r22-a" />
      <Reports5 label="r22-b" />
      <Glue23 value="r22" />
      <Shared23>route</Shared23>
      <Legacy title="r22-barrel" />
      
    </div>
  );
}
