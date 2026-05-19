
import { Audits7 } from "../entities/audits/components/Audits7";
import { Audits8 } from "../entities/audits/components/Audits8";
import Glue20 from "../shared/glue/glue-20";
import { Shared20 } from "../shared/components/Shared20";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route19() {
  const Legacy = ALL_LEGACY.LegacyContainer5;
  return (
    <div>
      <h1>R19 (audits) ({ALL_PREFIXES.length} utils)</h1>
      <Audits7 label="r19-a" />
      <Audits8 label="r19-b" />
      <Glue20 value="r19" />
      <Shared20>route</Shared20>
      <Legacy title="r19-barrel" />
      
    </div>
  );
}
