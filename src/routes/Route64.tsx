
import { Comments10 } from "../entities/comments/components/Comments10";
import { Comments11 } from "../entities/comments/components/Comments11";
import Glue15 from "../shared/glue/glue-15";
import { Shared25 } from "../shared/components/Shared25";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";

export default function Route64() {
  const Legacy = ALL_LEGACY.LegacyContainer2;
  return (
    <div>
      <h1>R64 (comments) ({ALL_PREFIXES.length} utils)</h1>
      <Comments10 label="r64-a" />
      <Comments11 label="r64-b" />
      <Glue15 value="r64" />
      <Shared25>route</Shared25>
      <Legacy title="r64-barrel" />
      <LegacyContainer1 title="r64" />
    </div>
  );
}
