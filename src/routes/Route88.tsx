
import { Sessions10 } from "../entities/sessions/components/Sessions10";
import { Sessions11 } from "../entities/sessions/components/Sessions11";
import Glue39 from "../shared/glue/glue-39";
import { Shared9 } from "../shared/components/Shared9";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route88() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R88 (sessions) ({ALL_PREFIXES.length} utils)</h1>
      <Sessions10 label="r88-a" />
      <Sessions11 label="r88-b" />
      <Glue39 value="r88" />
      <Shared9>route</Shared9>
      <Legacy title="r88-barrel" />
      <LegacyContainer9 title="r88" />
    </div>
  );
}
