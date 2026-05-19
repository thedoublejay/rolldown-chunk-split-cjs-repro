
import { Sessions7 } from "../entities/sessions/components/Sessions7";
import { Sessions8 } from "../entities/sessions/components/Sessions8";
import Glue38 from "../shared/glue/glue-38";
import { Shared8 } from "../shared/components/Shared8";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route87() {
  const Legacy = ALL_LEGACY.LegacyContainer9;
  return (
    <div>
      <h1>R87 (sessions) ({ALL_PREFIXES.length} utils)</h1>
      <Sessions7 label="r87-a" />
      <Sessions8 label="r87-b" />
      <Glue38 value="r87" />
      <Shared8>route</Shared8>
      <Legacy title="r87-barrel" />
      
    </div>
  );
}
