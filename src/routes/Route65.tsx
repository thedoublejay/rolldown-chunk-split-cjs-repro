
import { Approvals1 } from "../entities/approvals/components/Approvals1";
import { Approvals2 } from "../entities/approvals/components/Approvals2";
import Glue16 from "../shared/glue/glue-16";
import { Shared26 } from "../shared/components/Shared26";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route65() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R65 (approvals) ({ALL_PREFIXES.length} utils)</h1>
      <Approvals1 label="r65-a" />
      <Approvals2 label="r65-b" />
      <Glue16 value="r65" />
      <Shared26>route</Shared26>
      <Legacy title="r65-barrel" />
      
    </div>
  );
}
