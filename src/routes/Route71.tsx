
import { Reviews7 } from "../entities/reviews/components/Reviews7";
import { Reviews8 } from "../entities/reviews/components/Reviews8";
import Glue22 from "../shared/glue/glue-22";
import { Shared32 } from "../shared/components/Shared32";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route71() {
  const Legacy = ALL_LEGACY.LegacyContainer9;
  return (
    <div>
      <h1>R71 (reviews) ({ALL_PREFIXES.length} utils)</h1>
      <Reviews7 label="r71-a" />
      <Reviews8 label="r71-b" />
      <Glue22 value="r71" />
      <Shared32>route</Shared32>
      <Legacy title="r71-barrel" />
      
    </div>
  );
}
