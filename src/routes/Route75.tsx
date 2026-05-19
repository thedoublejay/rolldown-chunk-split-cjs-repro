
import { Invitations7 } from "../entities/invitations/components/Invitations7";
import { Invitations8 } from "../entities/invitations/components/Invitations8";
import Glue26 from "../shared/glue/glue-26";
import { Shared36 } from "../shared/components/Shared36";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route75() {
  const Legacy = ALL_LEGACY.LegacyContainer13;
  return (
    <div>
      <h1>R75 (invitations) ({ALL_PREFIXES.length} utils)</h1>
      <Invitations7 label="r75-a" />
      <Invitations8 label="r75-b" />
      <Glue26 value="r75" />
      <Shared36>route</Shared36>
      <Legacy title="r75-barrel" />
      
    </div>
  );
}
