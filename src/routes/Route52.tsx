
import { Dashboard10 } from "../entities/dashboard/components/Dashboard10";
import { Dashboard11 } from "../entities/dashboard/components/Dashboard11";
import Glue3 from "../shared/glue/glue-3";
import { Shared13 } from "../shared/components/Shared13";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route52() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R52 (dashboard) ({ALL_PREFIXES.length} utils)</h1>
      <Dashboard10 label="r52-a" />
      <Dashboard11 label="r52-b" />
      <Glue3 value="r52" />
      <Shared13>route</Shared13>
      <Legacy title="r52-barrel" />
      <LegacyContainer5 title="r52" />
    </div>
  );
}
