
import { Imports1 } from "../entities/imports/components/Imports1";
import { Imports2 } from "../entities/imports/components/Imports2";
import Glue2 from "../shared/glue/glue-2";
import { Shared22 } from "../shared/components/Shared22";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route101() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R101 (imports) ({ALL_PREFIXES.length} utils)</h1>
      <Imports1 label="r101-a" />
      <Imports2 label="r101-b" />
      <Glue2 value="r101" />
      <Shared22>route</Shared22>
      <Legacy title="r101-barrel" />
      
    </div>
  );
}
