
import { Reviews10 } from "../entities/reviews/components/Reviews10";
import { Reviews11 } from "../entities/reviews/components/Reviews11";
import Glue23 from "../shared/glue/glue-23";
import { Shared33 } from "../shared/components/Shared33";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";

export default function Route72() {
  const Legacy = ALL_LEGACY.LegacyContainer10;
  return (
    <div>
      <h1>R72 (reviews) ({ALL_PREFIXES.length} utils)</h1>
      <Reviews10 label="r72-a" />
      <Reviews11 label="r72-b" />
      <Glue23 value="r72" />
      <Shared33>route</Shared33>
      <Legacy title="r72-barrel" />
      <LegacyContainer9 title="r72" />
    </div>
  );
}
