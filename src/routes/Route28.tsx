
import { Users10 } from "../entities/users/components/Users10";
import { Users11 } from "../entities/users/components/Users11";
import Glue29 from "../shared/glue/glue-29";
import { Shared29 } from "../shared/components/Shared29";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route28() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R28 (users) ({ALL_PREFIXES.length} utils)</h1>
      <Users10 label="r28-a" />
      <Users11 label="r28-b" />
      <Glue29 value="r28" />
      <Shared29>route</Shared29>
      <Legacy title="r28-barrel" />
      <LegacyContainer13 title="r28" />
    </div>
  );
}
