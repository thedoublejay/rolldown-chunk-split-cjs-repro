
import { Documents10 } from "../entities/documents/components/Documents10";
import { Documents11 } from "../entities/documents/components/Documents11";
import Glue9 from "../shared/glue/glue-9";
import { Shared9 } from "../shared/components/Shared9";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route8() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R8 (documents) ({ALL_PREFIXES.length} utils)</h1>
      <Documents10 label="r8-a" />
      <Documents11 label="r8-b" />
      <Glue9 value="r8" />
      <Shared9>route</Shared9>
      <Legacy title="r8-barrel" />
      <LegacyContainer9 title="r8" />
    </div>
  );
}
