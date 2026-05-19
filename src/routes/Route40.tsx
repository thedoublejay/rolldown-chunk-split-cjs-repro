
import { Search10 } from "../entities/search/components/Search10";
import { Search11 } from "../entities/search/components/Search11";
import Glue41 from "../shared/glue/glue-41";
import { Shared1 } from "../shared/components/Shared1";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route40() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R40 (search) ({ALL_PREFIXES.length} utils)</h1>
      <Search10 label="r40-a" />
      <Search11 label="r40-b" />
      <Glue41 value="r40" />
      <Shared1>route</Shared1>
      <Legacy title="r40-barrel" />
      <LegacyContainer9 title="r40" />
    </div>
  );
}
