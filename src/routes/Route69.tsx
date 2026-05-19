
import { Reviews1 } from "../entities/reviews/components/Reviews1";
import { Reviews2 } from "../entities/reviews/components/Reviews2";
import Glue20 from "../shared/glue/glue-20";
import { Shared30 } from "../shared/components/Shared30";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route69() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R69 (reviews) ({ALL_PREFIXES.length} utils)</h1>
      <Reviews1 label="r69-a" />
      <Reviews2 label="r69-b" />
      <Glue20 value="r69" />
      <Shared30>route</Shared30>
      <Legacy title="r69-barrel" />
      
    </div>
  );
}
