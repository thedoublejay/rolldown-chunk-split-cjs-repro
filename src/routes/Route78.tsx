
import { Feeds4 } from "../entities/feeds/components/Feeds4";
import { Feeds5 } from "../entities/feeds/components/Feeds5";
import Glue29 from "../shared/glue/glue-29";
import { Shared39 } from "../shared/components/Shared39";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route78() {
  const Legacy = ALL_LEGACY.LegacyContainer16;
  return (
    <div>
      <h1>R78 (feeds) ({ALL_PREFIXES.length} utils)</h1>
      <Feeds4 label="r78-a" />
      <Feeds5 label="r78-b" />
      <Glue29 value="r78" />
      <Shared39>route</Shared39>
      <Legacy title="r78-barrel" />
      
    </div>
  );
}
