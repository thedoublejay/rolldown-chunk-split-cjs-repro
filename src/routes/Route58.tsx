
import { Compliance4 } from "../entities/compliance/components/Compliance4";
import { Compliance5 } from "../entities/compliance/components/Compliance5";
import Glue9 from "../shared/glue/glue-9";
import { Shared19 } from "../shared/components/Shared19";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route58() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R58 (compliance) ({ALL_PREFIXES.length} utils)</h1>
      <Compliance4 label="r58-a" />
      <Compliance5 label="r58-b" />
      <Glue9 value="r58" />
      <Shared19>route</Shared19>
      <Legacy title="r58-barrel" />
      
    </div>
  );
}
