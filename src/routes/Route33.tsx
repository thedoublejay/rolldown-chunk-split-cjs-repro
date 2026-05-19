
import { Notifications1 } from "../entities/notifications/components/Notifications1";
import { Notifications2 } from "../entities/notifications/components/Notifications2";
import Glue34 from "../shared/glue/glue-34";
import { Shared34 } from "../shared/components/Shared34";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route33() {
  const Legacy = ALL_LEGACY.LegacyContainer3;
  return (
    <div>
      <h1>R33 (notifications) ({ALL_PREFIXES.length} utils)</h1>
      <Notifications1 label="r33-a" />
      <Notifications2 label="r33-b" />
      <Glue34 value="r33" />
      <Shared34>route</Shared34>
      <Legacy title="r33-barrel" />
      
    </div>
  );
}
