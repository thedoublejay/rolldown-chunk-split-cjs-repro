
import { Imports4 } from "../entities/imports/components/Imports4";
import { Imports5 } from "../entities/imports/components/Imports5";
import Glue3 from "../shared/glue/glue-3";
import { Shared23 } from "../shared/components/Shared23";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route102() {
  const Legacy = ALL_LEGACY.LegacyContainer8;
  return (
    <div>
      <h1>R102 (imports) ({ALL_PREFIXES.length} utils)</h1>
      <Imports4 label="r102-a" />
      <Imports5 label="r102-b" />
      <Glue3 value="r102" />
      <Shared23>route</Shared23>
      <Legacy title="r102-barrel" />
      
    </div>
  );
}
