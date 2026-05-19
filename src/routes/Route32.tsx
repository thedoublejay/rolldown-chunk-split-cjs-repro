
import { Settings10 } from "../entities/settings/components/Settings10";
import { Settings11 } from "../entities/settings/components/Settings11";
import Glue33 from "../shared/glue/glue-33";
import { Shared33 } from "../shared/components/Shared33";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";

export default function Route32() {
  const Legacy = ALL_LEGACY.LegacyContainer2;
  return (
    <div>
      <h1>R32 (settings) ({ALL_PREFIXES.length} utils)</h1>
      <Settings10 label="r32-a" />
      <Settings11 label="r32-b" />
      <Glue33 value="r32" />
      <Shared33>route</Shared33>
      <Legacy title="r32-barrel" />
      <LegacyContainer1 title="r32" />
    </div>
  );
}
