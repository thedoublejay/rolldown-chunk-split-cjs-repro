
import { Reports10 } from "../entities/reports/components/Reports10";
import { Reports11 } from "../entities/reports/components/Reports11";
import Glue25 from "../shared/glue/glue-25";
import { Shared25 } from "../shared/components/Shared25";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route24() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R24 (reports) ({ALL_PREFIXES.length} utils)</h1>
      <Reports10 label="r24-a" />
      <Reports11 label="r24-b" />
      <Glue25 value="r24" />
      <Shared25>route</Shared25>
      <Legacy title="r24-barrel" />
      <LegacyContainer9 title="r24" />
    </div>
  );
}
