
import { Notifications4 } from "../entities/notifications/components/Notifications4";
import { Notifications5 } from "../entities/notifications/components/Notifications5";
import Glue35 from "../shared/glue/glue-35";
import { Shared35 } from "../shared/components/Shared35";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route34() {
  const Legacy = ALL_LEGACY.LegacyContainer4;
  return (
    <div>
      <h1>R34 (notifications) ({ALL_PREFIXES.length} utils)</h1>
      <Notifications4 label="r34-a" />
      <Notifications5 label="r34-b" />
      <Glue35 value="r34" />
      <Shared35>route</Shared35>
      <Legacy title="r34-barrel" />
      
    </div>
  );
}
