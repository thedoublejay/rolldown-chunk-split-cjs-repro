
import { Users1 } from "../entities/users/components/Users1";
import { Users2 } from "../entities/users/components/Users2";
import Glue26 from "../shared/glue/glue-26";
import { Shared26 } from "../shared/components/Shared26";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route25() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R25 (users) ({ALL_PREFIXES.length} utils)</h1>
      <Users1 label="r25-a" />
      <Users2 label="r25-b" />
      <Glue26 value="r25" />
      <Shared26>route</Shared26>
      <Legacy title="r25-barrel" />
      
    </div>
  );
}
