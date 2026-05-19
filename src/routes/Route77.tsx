
import { Feeds1 } from "../entities/feeds/components/Feeds1";
import { Feeds2 } from "../entities/feeds/components/Feeds2";
import Glue28 from "../shared/glue/glue-28";
import { Shared38 } from "../shared/components/Shared38";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route77() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R77 (feeds) ({ALL_PREFIXES.length} utils)</h1>
      <Feeds1 label="r77-a" />
      <Feeds2 label="r77-b" />
      <Glue28 value="r77" />
      <Shared38>route</Shared38>
      <Legacy title="r77-barrel" />
      
    </div>
  );
}
