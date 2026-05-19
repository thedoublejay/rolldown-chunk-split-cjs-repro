
import { Notifications10 } from "../entities/notifications/components/Notifications10";
import { Notifications11 } from "../entities/notifications/components/Notifications11";
import Glue37 from "../shared/glue/glue-37";
import { Shared37 } from "../shared/components/Shared37";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route36() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R36 (notifications) ({ALL_PREFIXES.length} utils)</h1>
      <Notifications10 label="r36-a" />
      <Notifications11 label="r36-b" />
      <Glue37 value="r36" />
      <Shared37>route</Shared37>
      <Legacy title="r36-barrel" />
      <LegacyContainer5 title="r36" />
    </div>
  );
}
