
import { Workflows10 } from "../entities/workflows/components/Workflows10";
import { Workflows11 } from "../entities/workflows/components/Workflows11";
import Glue21 from "../shared/glue/glue-21";
import { Shared1 } from "../shared/components/Shared1";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route120() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R120 (workflows) ({ALL_PREFIXES.length} utils)</h1>
      <Workflows10 label="r120-a" />
      <Workflows11 label="r120-b" />
      <Glue21 value="r120" />
      <Shared1>route</Shared1>
      <Legacy title="r120-barrel" />
      <LegacyContainer9 title="r120" />
    </div>
  );
}
