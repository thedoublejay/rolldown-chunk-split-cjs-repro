
import { Search7 } from "../entities/search/components/Search7";
import { Search8 } from "../entities/search/components/Search8";
import Glue40 from "../shared/glue/glue-40";
import { Shared40 } from "../shared/components/Shared40";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route39() {
  const Legacy = ALL_LEGACY.LegacyContainer9;
  return (
    <div>
      <h1>R39 (search) ({ALL_PREFIXES.length} utils)</h1>
      <Search7 label="r39-a" />
      <Search8 label="r39-b" />
      <Glue40 value="r39" />
      <Shared40>route</Shared40>
      <Legacy title="r39-barrel" />
      
    </div>
  );
}
