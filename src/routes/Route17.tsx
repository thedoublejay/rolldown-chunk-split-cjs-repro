
import { Audits1 } from "../entities/audits/components/Audits1";
import { Audits2 } from "../entities/audits/components/Audits2";
import Glue18 from "../shared/glue/glue-18";
import { Shared18 } from "../shared/components/Shared18";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route17() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R17 (audits) ({ALL_PREFIXES.length} utils)</h1>
      <Audits1 label="r17-a" />
      <Audits2 label="r17-b" />
      <Glue18 value="r17" />
      <Shared18>route</Shared18>
      <Legacy title="r17-barrel" />
      
    </div>
  );
}
