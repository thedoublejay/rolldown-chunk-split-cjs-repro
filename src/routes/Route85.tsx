
import { Sessions1 } from "../entities/sessions/components/Sessions1";
import { Sessions2 } from "../entities/sessions/components/Sessions2";
import Glue36 from "../shared/glue/glue-36";
import { Shared6 } from "../shared/components/Shared6";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route85() {
  const Legacy = ALL_LEGACY.LegacyContainer7;
  return (
    <div>
      <h1>R85 (sessions) ({ALL_PREFIXES.length} utils)</h1>
      <Sessions1 label="r85-a" />
      <Sessions2 label="r85-b" />
      <Glue36 value="r85" />
      <Shared6>route</Shared6>
      <Legacy title="r85-barrel" />
      
    </div>
  );
}
