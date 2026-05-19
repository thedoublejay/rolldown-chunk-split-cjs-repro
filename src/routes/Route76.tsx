
import { Invitations10 } from "../entities/invitations/components/Invitations10";
import { Invitations11 } from "../entities/invitations/components/Invitations11";
import Glue27 from "../shared/glue/glue-27";
import { Shared37 } from "../shared/components/Shared37";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route76() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R76 (invitations) ({ALL_PREFIXES.length} utils)</h1>
      <Invitations10 label="r76-a" />
      <Invitations11 label="r76-b" />
      <Glue27 value="r76" />
      <Shared37>route</Shared37>
      <Legacy title="r76-barrel" />
      <LegacyContainer13 title="r76" />
    </div>
  );
}
