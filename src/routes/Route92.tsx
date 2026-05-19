
import { Tags10 } from "../entities/tags/components/Tags10";
import { Tags11 } from "../entities/tags/components/Tags11";
import Glue43 from "../shared/glue/glue-43";
import { Shared13 } from "../shared/components/Shared13";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";

export default function Route92() {
  const Legacy = ALL_LEGACY.LegacyContainer14;
  return (
    <div>
      <h1>R92 (tags) ({ALL_PREFIXES.length} utils)</h1>
      <Tags10 label="r92-a" />
      <Tags11 label="r92-b" />
      <Glue43 value="r92" />
      <Shared13>route</Shared13>
      <Legacy title="r92-barrel" />
      <LegacyContainer13 title="r92" />
    </div>
  );
}
