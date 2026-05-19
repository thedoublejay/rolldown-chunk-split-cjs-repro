
import { Compliance10 } from "../entities/compliance/components/Compliance10";
import { Compliance11 } from "../entities/compliance/components/Compliance11";
import Glue11 from "../shared/glue/glue-11";
import { Shared21 } from "../shared/components/Shared21";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route60() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R60 (compliance) ({ALL_PREFIXES.length} utils)</h1>
      <Compliance10 label="r60-a" />
      <Compliance11 label="r60-b" />
      <Glue11 value="r60" />
      <Shared21>route</Shared21>
      <Legacy title="r60-barrel" />
      <LegacyContainer13 title="r60" />
    </div>
  );
}
