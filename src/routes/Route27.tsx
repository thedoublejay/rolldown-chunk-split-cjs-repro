
import { Users7 } from "../entities/users/components/Users7";
import { Users8 } from "../entities/users/components/Users8";
import Glue28 from "../shared/glue/glue-28";
import { Shared28 } from "../shared/components/Shared28";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route27() {
  const Legacy = ALL_LEGACY.LegacyContainer13;
  return (
    <div>
      <h1>R27 (users) ({ALL_PREFIXES.length} utils)</h1>
      <Users7 label="r27-a" />
      <Users8 label="r27-b" />
      <Glue28 value="r27" />
      <Shared28>route</Shared28>
      <Legacy title="r27-barrel" />
      
    </div>
  );
}
