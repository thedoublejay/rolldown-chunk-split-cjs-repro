
import { Tags1 } from "../entities/tags/components/Tags1";
import { Tags2 } from "../entities/tags/components/Tags2";
import Glue40 from "../shared/glue/glue-40";
import { Shared10 } from "../shared/components/Shared10";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route89() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R89 (tags) ({ALL_PREFIXES.length} utils)</h1>
      <Tags1 label="r89-a" />
      <Tags2 label="r89-b" />
      <Glue40 value="r89" />
      <Shared10>route</Shared10>
      <Legacy title="r89-barrel" />
      
    </div>
  );
}
