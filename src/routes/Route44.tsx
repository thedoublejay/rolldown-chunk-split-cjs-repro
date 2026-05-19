
import { Campaigns10 } from "../entities/campaigns/components/Campaigns10";
import { Campaigns11 } from "../entities/campaigns/components/Campaigns11";
import Glue45 from "../shared/glue/glue-45";
import { Shared5 } from "../shared/components/Shared5";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route44() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R44 (campaigns) ({ALL_PREFIXES.length} utils)</h1>
      <Campaigns10 label="r44-a" />
      <Campaigns11 label="r44-b" />
      <Glue45 value="r44" />
      <Shared5>route</Shared5>
      <Legacy title="r44-barrel" />
      <LegacyContainer13 title="r44" />
    </div>
  );
}
