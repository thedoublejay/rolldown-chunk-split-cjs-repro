
import { Comments1 } from "../entities/comments/components/Comments1";
import { Comments2 } from "../entities/comments/components/Comments2";
import Glue12 from "../shared/glue/glue-12";
import { Shared22 } from "../shared/components/Shared22";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route61() {
  const Legacy = ALL_LEGACY.LegacyContainer15;
  return (
    <div>
      <h1>R61 (comments) ({ALL_PREFIXES.length} utils)</h1>
      <Comments1 label="r61-a" />
      <Comments2 label="r61-b" />
      <Glue12 value="r61" />
      <Shared22>route</Shared22>
      <Legacy title="r61-barrel" />
      
    </div>
  );
}
