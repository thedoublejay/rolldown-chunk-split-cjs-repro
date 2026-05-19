
import { Notifications7 } from "../entities/notifications/components/Notifications7";
import { Notifications8 } from "../entities/notifications/components/Notifications8";
import Glue36 from "../shared/glue/glue-36";
import { Shared36 } from "../shared/components/Shared36";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route35() {
  const Legacy = ALL_LEGACY.LegacyContainer5;
  return (
    <div>
      <h1>R35 (notifications) ({ALL_PREFIXES.length} utils)</h1>
      <Notifications7 label="r35-a" />
      <Notifications8 label="r35-b" />
      <Glue36 value="r35" />
      <Shared36>route</Shared36>
      <Legacy title="r35-barrel" />
      
    </div>
  );
}
