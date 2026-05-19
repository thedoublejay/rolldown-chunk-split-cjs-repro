
import { Logs10 } from "../entities/logs/components/Logs10";
import { Logs11 } from "../entities/logs/components/Logs11";
import Glue35 from "../shared/glue/glue-35";
import { Shared5 } from "../shared/components/Shared5";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route84() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R84 (logs) ({ALL_PREFIXES.length} utils)</h1>
      <Logs10 label="r84-a" />
      <Logs11 label="r84-b" />
      <Glue35 value="r84" />
      <Shared5>route</Shared5>
      <Legacy title="r84-barrel" />
      <LegacyContainer5 title="r84" />
    </div>
  );
}
