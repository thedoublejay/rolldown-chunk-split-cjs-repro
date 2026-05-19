
import { Feeds7 } from "../entities/feeds/components/Feeds7";
import { Feeds8 } from "../entities/feeds/components/Feeds8";
import Glue30 from "../shared/glue/glue-30";
import { Shared40 } from "../shared/components/Shared40";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route79() {
  const Legacy = ALL_LEGACY.LegacyContainer1;
  return (
    <div>
      <h1>R79 (feeds) ({ALL_PREFIXES.length} utils)</h1>
      <Feeds7 label="r79-a" />
      <Feeds8 label="r79-b" />
      <Glue30 value="r79" />
      <Shared40>route</Shared40>
      <Legacy title="r79-barrel" />
      
    </div>
  );
}
