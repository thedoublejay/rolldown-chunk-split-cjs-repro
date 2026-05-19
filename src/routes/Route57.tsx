
import { Compliance1 } from "../entities/compliance/components/Compliance1";
import { Compliance2 } from "../entities/compliance/components/Compliance2";
import Glue8 from "../shared/glue/glue-8";
import { Shared18 } from "../shared/components/Shared18";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route57() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R57 (compliance) ({ALL_PREFIXES.length} utils)</h1>
      <Compliance1 label="r57-a" />
      <Compliance2 label="r57-b" />
      <Glue8 value="r57" />
      <Shared18>route</Shared18>
      <Legacy title="r57-barrel" />
      
    </div>
  );
}
