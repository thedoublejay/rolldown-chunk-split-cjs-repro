
import { Users4 } from "../entities/users/components/Users4";
import { Users5 } from "../entities/users/components/Users5";
import Glue27 from "../shared/glue/glue-27";
import { Shared27 } from "../shared/components/Shared27";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route26() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R26 (users) ({ALL_PREFIXES.length} utils)</h1>
      <Users4 label="r26-a" />
      <Users5 label="r26-b" />
      <Glue27 value="r26" />
      <Shared27>route</Shared27>
      <Legacy title="r26-barrel" />
      
    </div>
  );
}
