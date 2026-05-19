
import { Audits10 } from "../entities/audits/components/Audits10";
import { Audits11 } from "../entities/audits/components/Audits11";
import Glue21 from "../shared/glue/glue-21";
import { Shared21 } from "../shared/components/Shared21";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";

export default function Route20() {
  const Legacy = ALL_LEGACY.LegacyContainer6;
  return (
    <div>
      <h1>R20 (audits) ({ALL_PREFIXES.length} utils)</h1>
      <Audits10 label="r20-a" />
      <Audits11 label="r20-b" />
      <Glue21 value="r20" />
      <Shared21>route</Shared21>
      <Legacy title="r20-barrel" />
      <LegacyContainer5 title="r20" />
    </div>
  );
}
