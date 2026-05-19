
import { Search4 } from "../entities/search/components/Search4";
import { Search5 } from "../entities/search/components/Search5";
import Glue39 from "../shared/glue/glue-39";
import { Shared39 } from "../shared/components/Shared39";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route38() {
  const Legacy = ALL_LEGACY.LegacyContainer8;
  return (
    <div>
      <h1>R38 (search) ({ALL_PREFIXES.length} utils)</h1>
      <Search4 label="r38-a" />
      <Search5 label="r38-b" />
      <Glue39 value="r38" />
      <Shared39>route</Shared39>
      <Legacy title="r38-barrel" />
      
    </div>
  );
}
