
import { Exports10 } from "../entities/exports/components/Exports10";
import { Exports11 } from "../entities/exports/components/Exports11";
import Glue1 from "../shared/glue/glue-1";
import { Shared21 } from "../shared/components/Shared21";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route100() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R100 (exports) ({ALL_PREFIXES.length} utils)</h1>
      <Exports10 label="r100-a" />
      <Exports11 label="r100-b" />
      <Glue1 value="r100" />
      <Shared21>route</Shared21>
      <Legacy title="r100-barrel" />
      <LegacyContainer5 title="r100" />
    </div>
  );
}
