
import { Invitations4 } from "../entities/invitations/components/Invitations4";
import { Invitations5 } from "../entities/invitations/components/Invitations5";
import Glue25 from "../shared/glue/glue-25";
import { Shared35 } from "../shared/components/Shared35";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route74() {
  const Legacy = ALL_LEGACY.LegacyContainer12;
  return (
    <div>
      <h1>R74 (invitations) ({ALL_PREFIXES.length} utils)</h1>
      <Invitations4 label="r74-a" />
      <Invitations5 label="r74-b" />
      <Glue25 value="r74" />
      <Shared35>route</Shared35>
      <Legacy title="r74-barrel" />
      
    </div>
  );
}
