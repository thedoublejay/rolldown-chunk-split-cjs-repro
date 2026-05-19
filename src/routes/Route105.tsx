
import { Metrics1 } from "../entities/metrics/components/Metrics1";
import { Metrics2 } from "../entities/metrics/components/Metrics2";
import Glue6 from "../shared/glue/glue-6";
import { Shared26 } from "../shared/components/Shared26";
import { ALL_LEGACY, ALL_PREFIXES } from "../shared/barrel";


export default function Route105() {
  const Legacy = ALL_LEGACY.LegacyContainer11;
  return (
    <div>
      <h1>R105 (metrics) ({ALL_PREFIXES.length} utils)</h1>
      <Metrics1 label="r105-a" />
      <Metrics2 label="r105-b" />
      <Glue6 value="r105" />
      <Shared26>route</Shared26>
      <Legacy title="r105-barrel" />
      
    </div>
  );
}
