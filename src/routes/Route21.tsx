
import { Reports1 } from "../entities/reports/components/Reports1";
import { Reports2 } from "../entities/reports/components/Reports2";
import Glue22 from "../shared/glue/glue-22";
import { Shared22 } from "../shared/components/Shared22";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route21() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R21 (reports) ({ALL_PREFIXES.length} utils)</h1>
      <Reports1 label="r21-a" />
      <Reports2 label="r21-b" />
      <Glue22 value="r21" />
      <Shared22>route</Shared22>
      <Legacy title="r21-barrel" />
      
    </div>
  );
}
