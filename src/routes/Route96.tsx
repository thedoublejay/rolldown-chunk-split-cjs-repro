
import { Filters10 } from "../entities/filters/components/Filters10";
import { Filters11 } from "../entities/filters/components/Filters11";
import Glue47 from "../shared/glue/glue-47";
import { Shared17 } from "../shared/components/Shared17";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";

export default function Route96() {
  const Legacy = ALL_LEGACY.LegacyContainer2;
  return (
    <div>
      <h1>R96 (filters) ({ALL_PREFIXES.length} utils)</h1>
      <Filters10 label="r96-a" />
      <Filters11 label="r96-b" />
      <Glue47 value="r96" />
      <Shared17>route</Shared17>
      <Legacy title="r96-barrel" />
      <LegacyContainer1 title="r96" />
    </div>
  );
}
