
import { Tags4 } from "../entities/tags/components/Tags4";
import { Tags5 } from "../entities/tags/components/Tags5";
import Glue41 from "../shared/glue/glue-41";
import { Shared11 } from "../shared/components/Shared11";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route90() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R90 (tags) ({ALL_PREFIXES.length} utils)</h1>
      <Tags4 label="r90-a" />
      <Tags5 label="r90-b" />
      <Glue41 value="r90" />
      <Shared11>route</Shared11>
      <Legacy title="r90-barrel" />
      
    </div>
  );
}
