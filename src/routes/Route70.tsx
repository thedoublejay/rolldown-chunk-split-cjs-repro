
import { Reviews4 } from "../entities/reviews/components/Reviews4";
import { Reviews5 } from "../entities/reviews/components/Reviews5";
import Glue21 from "../shared/glue/glue-21";
import { Shared31 } from "../shared/components/Shared31";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route70() {
  const Legacy = ALL_LEGACY.LegacyContainer8;
  return (
    <div>
      <h1>R70 (reviews) ({ALL_PREFIXES.length} utils)</h1>
      <Reviews4 label="r70-a" />
      <Reviews5 label="r70-b" />
      <Glue21 value="r70" />
      <Shared31>route</Shared31>
      <Legacy title="r70-barrel" />
      
    </div>
  );
}
