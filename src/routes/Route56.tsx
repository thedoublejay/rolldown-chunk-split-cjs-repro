
import { Library10 } from "../entities/library/components/Library10";
import { Library11 } from "../entities/library/components/Library11";
import Glue7 from "../shared/glue/glue-7";
import { Shared17 } from "../shared/components/Shared17";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route56() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R56 (library) ({ALL_PREFIXES.length} utils)</h1>
      <Library10 label="r56-a" />
      <Library11 label="r56-b" />
      <Glue7 value="r56" />
      <Shared17>route</Shared17>
      <Legacy title="r56-barrel" />
      <LegacyContainer9 title="r56" />
    </div>
  );
}
