
import { Search1 } from "../entities/search/components/Search1";
import { Search2 } from "../entities/search/components/Search2";
import Glue38 from "../shared/glue/glue-38";
import { Shared38 } from "../shared/components/Shared38";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route37() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R37 (search) ({ALL_PREFIXES.length} utils)</h1>
      <Search1 label="r37-a" />
      <Search2 label="r37-b" />
      <Glue38 value="r37" />
      <Shared38>route</Shared38>
      <Legacy title="r37-barrel" />
      
    </div>
  );
}
