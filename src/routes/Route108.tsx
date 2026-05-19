
import { Metrics10 } from "../entities/metrics/components/Metrics10";
import { Metrics11 } from "../entities/metrics/components/Metrics11";
import Glue9 from "../shared/glue/glue-9";
import { Shared29 } from "../shared/components/Shared29";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route108() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R108 (metrics) ({ALL_PREFIXES.length} utils)</h1>
      <Metrics10 label="r108-a" />
      <Metrics11 label="r108-b" />
      <Glue9 value="r108" />
      <Shared29>route</Shared29>
      <Legacy title="r108-barrel" />
      <LegacyContainer13 title="r108" />
    </div>
  );
}
