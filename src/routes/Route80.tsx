
import { Feeds10 } from "../entities/feeds/components/Feeds10";
import { Feeds11 } from "../entities/feeds/components/Feeds11";
import Glue31 from "../shared/glue/glue-31";
import { Shared1 } from "../shared/components/Shared1";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";

export default function Route80() {
  const Legacy = ALL_LEGACY.LegacyContainer2;
  return (
    <div>
      <h1>R80 (feeds) ({ALL_PREFIXES.length} utils)</h1>
      <Feeds10 label="r80-a" />
      <Feeds11 label="r80-b" />
      <Glue31 value="r80" />
      <Shared1>route</Shared1>
      <Legacy title="r80-barrel" />
      <LegacyContainer1 title="r80" />
    </div>
  );
}
