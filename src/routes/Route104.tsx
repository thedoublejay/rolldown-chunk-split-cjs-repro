
import { Imports10 } from "../entities/imports/components/Imports10";
import { Imports11 } from "../entities/imports/components/Imports11";
import Glue5 from "../shared/glue/glue-5";
import { Shared25 } from "../shared/components/Shared25";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route104() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R104 (imports) ({ALL_PREFIXES.length} utils)</h1>
      <Imports10 label="r104-a" />
      <Imports11 label="r104-b" />
      <Glue5 value="r104" />
      <Shared25>route</Shared25>
      <Legacy title="r104-barrel" />
      <LegacyContainer9 title="r104" />
    </div>
  );
}
