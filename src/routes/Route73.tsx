
import { Invitations1 } from "../entities/invitations/components/Invitations1";
import { Invitations2 } from "../entities/invitations/components/Invitations2";
import Glue24 from "../shared/glue/glue-24";
import { Shared34 } from "../shared/components/Shared34";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route73() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R73 (invitations) ({ALL_PREFIXES.length} utils)</h1>
      <Invitations1 label="r73-a" />
      <Invitations2 label="r73-b" />
      <Glue24 value="r73" />
      <Shared34>route</Shared34>
      <Legacy title="r73-barrel" />
      
    </div>
  );
}
