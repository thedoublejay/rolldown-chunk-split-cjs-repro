
import { Approvals4 } from "../entities/approvals/components/Approvals4";
import { Approvals5 } from "../entities/approvals/components/Approvals5";
import Glue17 from "../shared/glue/glue-17";
import { Shared27 } from "../shared/components/Shared27";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route66() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R66 (approvals) ({ALL_PREFIXES.length} utils)</h1>
      <Approvals4 label="r66-a" />
      <Approvals5 label="r66-b" />
      <Glue17 value="r66" />
      <Shared27>route</Shared27>
      <Legacy title="r66-barrel" />
      
    </div>
  );
}
