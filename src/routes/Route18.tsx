
import { Audits4 } from "../entities/audits/components/Audits4";
import { Audits5 } from "../entities/audits/components/Audits5";
import Glue19 from "../shared/glue/glue-19";
import { Shared19 } from "../shared/components/Shared19";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route18() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R18 (audits) ({ALL_PREFIXES.length} utils)</h1>
      <Audits4 label="r18-a" />
      <Audits5 label="r18-b" />
      <Glue19 value="r18" />
      <Shared19>route</Shared19>
      <Legacy title="r18-barrel" />
      
    </div>
  );
}
